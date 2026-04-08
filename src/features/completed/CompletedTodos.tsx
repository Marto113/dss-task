import { useTodoSelectors } from '../../hooks/useTodoSelectors'
import { TodoList } from '../../components/todo/TodoList'

export function CompletedTodos() {
    const { completed } = useTodoSelectors()

    return (
        <TodoList todos={completed} />
    )   
}