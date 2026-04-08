import { useTodos } from '../../hooks/useTodos';

export function TodoFilters() {
    const { state, dispatch } = useTodos();

    return (
        <>
            {/* filter by user */}
            <select 
                value ={state.filterUser || ''}
                onChange={(e) => 
                    dispatch({
                        type: 'SET_FILTER', 
                        payload: e.target.value ? parseInt(e.target.value) : null 
                    })
            }
            >
                <option value="">All Users</option>
                {state.users.map(user => (
                    <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </select>


            {/* filter completed by asc and desc */}
            <select
                value={state.sortUncompleted}
                onChange={(e) =>
                dispatch({
                    type: 'SET_SORT_UNCOMPLETED',
                    payload: e.target.value as 'asc' | 'desc'
                })
                }
            >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>


            {/* filter uncompleted by date asc or desc */}
            <select
                value={state.sortCompleted}
                onChange={(e) =>
                dispatch({
                    type: 'SET_SORT_COMPLETED',
                    payload: e.target.value as 'asc' | 'desc'
                })
                }
            >
                <option value="asc">Least Recent</option>
                <option value="desc">Most Recent</option>
            </select>
        </>
    )
}