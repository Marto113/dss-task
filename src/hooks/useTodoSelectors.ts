import { useTodos } from './useTodos';

export const useTodoSelectors = () => {
  const { state } = useTodos();

  let todos = [...state.todos];

  if (state.filterUser !== null) {
    todos = todos.filter((t) => t.userId === state.filterUser);
  }

  const uncompleted = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  // sort uncompleted by title
  uncompleted.sort((a, b) => {
    return state.sortUncompleted === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  // sort completed by completedAt
  completed.sort((a, b) => {
    const dateA = new Date(a.completedAt || '').getTime();
    const dateB = new Date(b.completedAt || '').getTime();

    return state.sortCompleted === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return { uncompleted, completed };
};
