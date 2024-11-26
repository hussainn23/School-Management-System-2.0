import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, AuthResponse } from '../types/auth';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (response: AuthResponse) =>
        set({
          user: response.data.user,
          token: response.data.access_token,
          isAuthenticated: true,
        }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
