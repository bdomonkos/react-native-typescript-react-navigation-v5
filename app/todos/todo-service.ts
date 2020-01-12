import { ITodoModel } from './todo-model';
import { api } from '../api-config';

export async function getTodos() {
    return await api.get('todoss');
}

export async function deleteTodo(id: string) {
    return await api.delete('todos/' + id);
}

