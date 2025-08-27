// Exemplo de service com React Query
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${API_BASE}/users`);
    if (!response.ok) {
      throw new Error('Falha ao buscar usuários');
    }
    return response.json();
  },

  async getUser(id: number): Promise<User> {
    const response = await fetch(`${API_BASE}/users/${id}`);
    if (!response.ok) {
      throw new Error('Falha ao buscar usuário');
    }
    return response.json();
  },

  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${API_BASE}/posts`);
    if (!response.ok) {
      throw new Error('Falha ao buscar posts');
    }
    return response.json();
  },
};