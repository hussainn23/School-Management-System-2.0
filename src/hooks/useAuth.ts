import {  useMutation } from 'react-query';
import { useAuthStore } from '../store/authStore';
import { AuthResponse } from '../types/auth';

export type ErrorType = {
  message: string;
};

const API_URL =
  'https://school-management-school-system.e5fb6t.easypanel.host/api';

export const useAuth = () => {
  const { login, logout } = useAuthStore();

  const loginMutation = useMutation<
    AuthResponse,
    ErrorType,
    { email: string; password: string }
  >(
    async (credentials) => {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        login(data);
      },
    }
  );

  const logoutMutation = useMutation(async () => {
    // Implement logout API call if needed
    logout();
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading: loginMutation.isLoading || logoutMutation.isLoading,
    error: loginMutation.error,
  };
};
