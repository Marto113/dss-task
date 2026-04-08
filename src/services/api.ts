import { TodoListSchema, type Todo } from '../schemas/todo.schema';
import { UserListSchema, type User } from '../schemas/user.schema';

export const fetchTodos = async (): Promise<Todo[]> => {
    try { 
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');

        if(!res.ok) {
            throw new Error(`Failed to fetch todos: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        const parsed = TodoListSchema.safeParse(data);

        if (!parsed.success) {
            console.error(parsed.error);
            return [];
        }

        return parsed.data;
    } catch (error) {
        console.error('Error fetching todos:', error); 
        throw error; 
    }
}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!res.ok) {
            throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();

        const parsed = UserListSchema.safeParse(data);

        if (!parsed.success) {
            console.error(parsed.error);
            return [];
        }

        return parsed.data;

    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}