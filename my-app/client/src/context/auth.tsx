'use client';
import { apiClient } from '@/lib/apiClient';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: null | {
    id: number;
    email: string;
    username: string;
  };
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<null | {
    id: number;
    email: string;
    username: string;
  }>(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // バックエンドでもtokenを使うことができるようになる
      apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;

      apiClient
        .get('/users/find')
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const login = async (token: string) => {
    localStorage.setItem('auth_token', token);
    // ログインの時にheaderに値をセットする、そうしないとisAuthenticatedで値を正しく取れない
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;

    try {
      apiClient.get('/users/find').then((res) => {
        setUser(res.data.user);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    localStorage.removeItem('auth_token'); // ローカルストレージから削除
    setUser(null); // 状態を削除
    delete apiClient.defaults.headers['Authorization']; // headerから削除
  };
  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
