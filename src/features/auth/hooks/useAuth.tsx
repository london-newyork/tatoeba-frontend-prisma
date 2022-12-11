// import { useRecoilState } from 'recoil';
import { useMemo } from 'react';
// import { LoginUserAtom } from '../../../utils/atoms/LoginUserAtom';
import { useAccessToken, useSetAccessToken } from '../store';

export type Auth = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
  userId: string | null;
};

export const useAuth = (): Auth => {
  // const [persistAccessToken, setPersistAccessToken] = useRecoilState(LoginUserAtom);
  const accessToken = useAccessToken();
  const setAccessToken = useSetAccessToken();

  // userIdをmemo化して何度も利用
  const userId = useMemo(() => {
    // if (!persistAccessToken) return null;
    // const decoded = JSON.parse(window.atob(persistAccessToken.split('.')[1]));
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
    /*  setPersistAccessToken(data.token); */
    setAccessToken(data.token);
  };

  const logout = () => {
    // setPersistAccessToken(null);
    setAccessToken(null);
  };

  // const isLoggedIn = persistAccessToken ? true : false;
  const isLoggedIn = accessToken ? true : false;

  return { login, logout, isLoggedIn, userId };
};
