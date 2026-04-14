import { useTodoSelectors } from '../../hooks/useTodoSelectors';
import { TodoList } from '../../components/todo/TodoList';
import { useState } from 'react';
import { LoadMore } from '../../components/common/LoadMore';

export function CompletedTodos() {
  const { completed } = useTodoSelectors();
  const [visible, setVisible] = useState(5);

  return (
    <div className="todos__side right">
      <TodoList todos={completed.slice(0, visible)} title="Completed" />
      <div className="todos__list-controls">
        {visible < completed.length ? (
          <span>
            Showing {visible} of {completed.length}
          </span>
        ) : (
          <span>Showing all {completed.length} completed todos</span>
        )}
        <LoadMore
          visible={visible}
          total={completed.length}
          onLoadMore={() => setVisible((v) => v + 10)}
        />
      </div>
    </div>
  );
}
