import type { Todo } from '../../schemas/todo.schema'

type Props = {
    id: number,
    todo: Todo
}

export function TodoItem({ id, todo }: Props){
    return (
        <div id={id.toString()}>
            <h3>{todo.title}</h3>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
    )
}