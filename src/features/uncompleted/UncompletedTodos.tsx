import { useTodoSelectors } from '../../hooks/useTodoSelectors'
import { TodoList } from '../../components/todo/TodoList'

export function UncompletedTodos() {
    const { uncompleted } = useTodoSelectors()

    return (
        <TodoList todos={uncompleted} />
    )   
}