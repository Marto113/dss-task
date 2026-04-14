import type { Todo } from '../../schemas/todo.schema'
import { useTodos } from '../../hooks/useTodos'

type Props = {
    todo: Todo
}

const getInitials = (name: string) => {
  if (!name) return "";
  const first = name[0][0];

  return first.toUpperCase();
};

export function TodoItem({ todo }: Props){
    const { state, dispatch } = useTodos() 
    const todoUser = state.users.find(user => user.id === todo.userId)

    function handleClick(todoId: number) {
        dispatch({ type: 'TOGGLE_TODO', payload: todoId })
    }

    return (
        <div
            className={`todos--list__item ${
                todo.completed ? 'todos--list__item--completed' : 'todos--list__item--uncompleted'
            }`}
            id={todo.id.toString()}
        >
            <div className="todos--list__item--header">
                <h5>{todo.title}</h5>
                <span className="todos--list__item--header__initials">
                    {getInitials(todoUser?.username ?? '')}
                </span>
            </div>
            <button onClick={() => handleClick(todo.id)}>
                {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>

            {todo.completedAt && (
                <p>Completed at: {new Date(todo.completedAt).toLocaleString()}</p>
            )}
        </div>
    )
}
