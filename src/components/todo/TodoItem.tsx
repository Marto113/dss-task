import type { Todo } from '../../schemas/todo.schema';
import { useTodos } from '../../hooks/useTodos';

type Props = {
  todo: Todo;
};

const getInitials = (name: string) => {
  if (!name) return '';
  const first = name[0][0];

  return first.toUpperCase();
};

const transformDate = (dateString: string) => {
  const date = new Date(dateString).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return date;
};

export function TodoItem({ todo }: Props) {
  const { state, dispatch, addToast } = useTodos();
  const todoUser = state.users.find((user) => user.id === todo.userId);

  function handleClick(todo: Todo) {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });

    if (!todo.completed) {
      addToast(`"${todo.title}" completed`, 'complete');
    } else {
      addToast(`"${todo.title}" marked as uncompleted`, 'undo');
    }
  }

  return (
    <div
      className={`todos--list__item ${
        todo.completed
          ? 'todos--list__item--completed'
          : 'todos--list__item--uncompleted'
      }`}
      id={todo.id.toString()}
    >
      <div className="todos--list__item--header">
        <h5>{todo.title}</h5>
        <span className="todos--list__item--header__initials">
          {getInitials(todoUser?.username ?? '')}
        </span>
      </div>
      {todo.completedAt && (
        <p className="todos--list__item--completed-at">
          {transformDate(todo.completedAt)}
        </p>
      )}
      <button onClick={() => handleClick(todo)}>
        {todo.completed ? 'Uncomplete' : 'Complete'}
      </button>
    </div>
  );
}
