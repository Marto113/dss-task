import { useTodos } from './useTodos'

export const useTodoSelectors = () => {
    const { state } = useTodos()

    const uncompleted = state.todos.filter(t => !t.completed);
    const completed = state.todos.filter(t => t.completed);

    return { uncompleted, completed };
}