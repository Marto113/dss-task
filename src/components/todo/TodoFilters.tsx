import { useTodos } from '../../hooks/useTodos';

export function TodoFilters() {
  const { state, dispatch } = useTodos();

  return (
    <div className="todos--filters">
      {/* filter by user */}
      <div>
        <h3>All</h3>
        <select
          value={state.filterUser || ''}
          onChange={(e) =>
            dispatch({
              type: 'SET_FILTER',
              payload: e.target.value ? parseInt(e.target.value) : null,
            })
          }
        >
          <option value="">All Users</option>
          {state.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>

      {/* filter completed by asc and desc */}
      <div>
        <h3>Uncompleted</h3>
        <select
          value={state.sortUncompleted}
          onChange={(e) =>
            dispatch({
              type: 'SET_SORT_UNCOMPLETED',
              payload: e.target.value as 'asc' | 'desc',
            })
          }
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* filter uncompleted by date asc or desc */}
      <div>
        <h3>Completed</h3>
        <select
          value={state.sortCompleted}
          onChange={(e) =>
            dispatch({
              type: 'SET_SORT_COMPLETED',
              payload: e.target.value as 'asc' | 'desc',
            })
          }
        >
          <option value="asc">Least Recent</option>
          <option value="desc">Most Recent</option>
        </select>
      </div>
    </div>
  );
}
