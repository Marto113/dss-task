import { TodoFilters } from './components/todo/TodoFilters'
import { CompletedTodos } from './features/completed/CompletedTodos'
import { UncompletedTodos } from './features/uncompleted/UncompletedTodos'
import { useTodos } from './hooks/useTodos'

function App() {
  return (
    <div className="app">
      <TodoFilters />

      <div className="todos">
        <UncompletedTodos />
        <CompletedTodos />
      </div>
      
    </div>
  )
}

export default App