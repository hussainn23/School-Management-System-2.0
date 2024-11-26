export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  status: string;
  message: string;
  data: {
    access_token: string;
    token_type: string;
    user: User;
  };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (response: AuthResponse) => void;
  logout: () => void;
}
