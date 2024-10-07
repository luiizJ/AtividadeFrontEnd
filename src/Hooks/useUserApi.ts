import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  // Adicione mais campos conforme necessário
}

export const useUserApi = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data: User[] = await response.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user: User) => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to add user');
      const newUser: User = await response.json();
      setUsers(prevUsers => [...prevUsers, newUser]);
    } catch (err: any) {
      setError(err.message || 'Failed to add user.');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (user: User) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to update user');
      const updatedUser: User = await response.json();
      setUsers(prevUsers => prevUsers.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    } catch (err: any) {
      setError(err.message || 'Failed to update user.');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (err: any) {
      setError(err.message || 'Failed to delete user.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, addUser, updateUser, deleteUser, loading, error };
};
