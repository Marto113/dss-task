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
        <div className="todos--list__item" id={todo.id.toString()}>
            <h3>{todo.title}</h3>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <button onClick={() => handleClick(todo.id)}>
                {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>
        </div>
    )
}