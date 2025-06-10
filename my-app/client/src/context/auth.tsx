'use client';
import { apiClient } from '@/lib/apiClient';
import React, { ReactNode, useContext, useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  useEffect(() => {
    const token = localStorage.getItem('auth_token');

    // バックエンドでもtokenを使うことができるようになる
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
  }, []);

  const login = async (token: string) => {
    localStorage.setItem('auth_token', token);
  };
  const logout = () => {
    localStorage.removeItem('auth_token');
  };
  const value = {
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
