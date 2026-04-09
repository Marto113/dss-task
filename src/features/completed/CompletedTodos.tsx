import { useTodoSelectors } from '../../hooks/useTodoSelectors'
import { TodoList } from '../../components/todo/TodoList'
import { useState } from 'react'
import { LoadMore } from '../../components/common/LoadMore';

export function CompletedTodos() {
    const { completed } = useTodoSelectors()
    const [visible, setVisible] = useState(5);

    return (
        <div className="todos--side">
            <TodoList todos={completed.slice(0, visible)} title="Completed" />
            <LoadMore
                visible={visible}
                total={completed.length}
                onLoadMore={() => setVisible(v => v + 10)}
            />
        </div>
    )   
}