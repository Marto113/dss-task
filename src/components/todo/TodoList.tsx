import type { Todo } from '../../schemas/todo.schema';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  title: string;
};

export function TodoList({ todos, title }: Props) {
  return (
    <div className="todos__list-container">
      <h2>{title}</h2>
      <div className="todos__list-wrapper">
        <div className="todos--list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
        <div className="todos--fade" />
      </div>
    </div>
  );
}
