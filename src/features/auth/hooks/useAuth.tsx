import { useMemo } from 'react';
import { useAccessToken, useSetAccessToken } from '../store';

export type Auth = {
  // TODO: とりあえず無視 パラメータないとloginが動かない
  // eslint-disable-next-line
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
  userId: string | null;
};

export const useAuth = (): Auth => {
  const accessToken = useAccessToken();
  const setAccessToken = useSetAccessToken();

  // userIdをmemo化して何度も利用
  const userId = useMemo(() => {
    if (!accessToken) return null;
    const decoded = JSON.parse(window.atob(accessToken.split('.')[1]));

    if (!decoded) return null;
    const id = decoded.id;
    return id;
  }, [accessToken]);

  const login = async (email: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    });
    const data = await res.json();

    setAccessToken(data.token);
  };

  const logout = () => {
    setAccessToken(null);
  };

  const isLoggedIn = accessToken ? true : false;

  return { login, logout, isLoggedIn, userId };
};
