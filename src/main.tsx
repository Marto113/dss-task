import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App.tsx'
import { TodoProvider } from './context/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
)
