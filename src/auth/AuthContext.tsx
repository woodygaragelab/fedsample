import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getSessionUser, logoutApi } from './authService';

export interface AuthUser {
  id: string;
  name: string;
  role: 'admin' | 'member';
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: AuthUser, token: string) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSessionUser()
      .then((session) => {
        if (session) {
          setUser(session.user);
          setToken(session.token);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const login = (u: AuthUser, t: string) => {
    setUser(u);
    setToken(t);
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
