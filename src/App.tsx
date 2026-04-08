import { CompletedTodos } from './features/completed/CompletedTodos'
import { UncompletedTodos } from './features/uncompleted/UncompletedTodos'
import { useTodos } from './hooks/useTodos'

function App() {
  const { state } = useTodos()

  console.log(state.todos)
  console.log(state.users)

  return (
    <div >
      <h1>Todo App</h1>

      {/* {state.todos.map(todo => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      ))} */}

      {/* <h2>Uncompleted Todos</h2>
      {uncompleted.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
        </div>
      ))}

      <h2>Completed Todos</h2>
      {completed.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
        </div>
      ))} */}

      <div className="todos">
        <UncompletedTodos />
        <CompletedTodos />
      </div>
      
    </div>
  )
}

export default App