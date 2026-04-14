import { Header } from './components/common/Header';
import { TodoFilters } from './components/todo/TodoFilters';
import { CompletedTodos } from './features/completed/CompletedTodos';
import { UncompletedTodos } from './features/uncompleted/UncompletedTodos';
import { ToastList } from './components/toast/ToastList';
import { useTodos } from './hooks/useTodos';

function App() {
  const { toasts } = useTodos();

  return (
    <>
      <ToastList toasts={toasts} />

      <Header />
      <div className="app">
        <TodoFilters />

        <div className="todos">
          <UncompletedTodos />
          <CompletedTodos />
        </div>
      </div>
    </>
  );
}

export default App;
