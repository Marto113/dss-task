import { useTodos } from './hooks/useTodos'

function App() {
  const { state } = useTodos()

  console.log(state.todos)
  console.log(state.users)

  return (
    <div>
      <h1>Todo App</h1>

      {state.todos.map(todo => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      ))}

      
    </div>
  )
}

export default App