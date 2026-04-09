import type { Todo } from '../../schemas/todo.schema'
import { useTodos } from '../../hooks/useTodos'

type Props = {
    todo: Todo
}

export function TodoItem({ todo }: Props){
    const { dispatch } = useTodos() 

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
            <h5>{todo.title}</h5>
            <button onClick={() => handleClick(todo.id)}>
                {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>

            {todo.completedAt && (
                <p>Completed at: {new Date(todo.completedAt).toLocaleString()}</p>
            )}
        </div>
    )
}