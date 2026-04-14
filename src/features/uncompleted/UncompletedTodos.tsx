import { useTodoSelectors } from '../../hooks/useTodoSelectors'
import { TodoList } from '../../components/todo/TodoList'
import { useState } from 'react';
import { LoadMore } from '../../components/common/LoadMore';

export function UncompletedTodos() {
    const { uncompleted } = useTodoSelectors()
    const [visible, setVisible] = useState(5);

    return (
        <div className="todos__side left">
            <TodoList todos={uncompleted.slice(0, visible)} title="Uncompleted"/>
            <div className="todos__list-controls">
                {visible < uncompleted.length ? (
                    <span>Showing {visible} of {uncompleted.length}</span>
                ) : (
                    <span>Showing all {uncompleted.length} uncompleted todos</span>
                )}
                <LoadMore
                    visible={visible}
                    total={uncompleted.length}
                    onLoadMore={() => setVisible(v => v + 10)}
                />
            </div>
        </div>
    )   
}