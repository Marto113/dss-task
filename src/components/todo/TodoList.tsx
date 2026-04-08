import { useTodos } from '../../hooks/useTodos'
import type { Todo } from '../../schemas/todo.schema'
import { TodoItem } from './TodoItem'

type Props = {
    todos: Todo[]
}

export function TodoList({ todos }: Props) {

    return (
        <div>
            {todos.map(todo => (
                <TodoItem id={todo.id} todo={todo} />
            ))}
        </div>
    )
}