import { createContext, useEffect, useReducer, useState } from 'react';
import type { ReactNode } from 'react';
import { fetchTodos, fetchUsers } from '../services/api';
import type { Todo } from '../schemas/todo.schema';
import type { User } from '../schemas/user.schema';

type TodoState = {
  todos: Todo[];
  users: User[];
  filterUser: number | null;
  sortUncompleted: 'asc' | 'desc';
  sortCompleted: 'asc' | 'desc';
};

const initialState: TodoState = {
  todos: [],
  users: [],
  filterUser: null,
  sortUncompleted: 'asc',
  sortCompleted: 'desc',
};

type Action =
  | {
      type: 'SET_DATA';
      payload: { todos: Todo[]; users: User[] };
    }
  | {
      type: 'TOGGLE_TODO';
      payload: number;
    }
  | { type: 'SET_FILTER'; payload: number | null }
  | { type: 'SET_SORT_UNCOMPLETED'; payload: 'asc' | 'desc' }
  | { type: 'SET_SORT_COMPLETED'; payload: 'asc' | 'desc' };

function reducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        todos: action.payload.todos,
        users: action.payload.users,
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
                completedAt: todo.completed ? null : new Date().toISOString(),
              }
            : todo,
        ),
      };

    case 'SET_FILTER':
      return { ...state, filterUser: action.payload };

    case 'SET_SORT_UNCOMPLETED':
      return { ...state, sortUncompleted: action.payload };

    case 'SET_SORT_COMPLETED':
      return { ...state, sortCompleted: action.payload };

    default:
      return state;
  }
}

type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<Action>;
  toasts: { id: number; message: string; type?: 'complete' | 'undo' }[];
  addToast: (message: string, type?: 'complete' | 'undo') => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toasts, setToasts] = useState<
    { id: number; message: string; type?: 'complete' | 'undo' }[]
  >([]);

  const addToast = (
    message: string,
    type: 'complete' | 'undo' = 'complete',
  ) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const todos = await fetchTodos();
        const users = await fetchUsers();

        const now = Date.now();

        const extraTodos = todos.map((todo, index) => ({
          ...todo,
          completedAt: todo.completed
            ? new Date(now + index).toISOString()
            : null,
        }));

        console.log(todos);
        console.log(users);

        dispatch({
          type: 'SET_DATA',
          payload: { todos: extraTodos, users },
        });
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch, toasts, addToast }}>
      {children}
    </TodoContext.Provider>
  );
}
