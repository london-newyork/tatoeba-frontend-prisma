import { useRecoilState } from 'recoil';
import { LoginUserAtom } from '../../../../utils/atoms/LoginUserAtom';
import { useMemo } from 'react';

export type Auth = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
  userId: string | null;
};

export const useAuth = (): Auth => {
  const [persistAccessToken, setPersistAccessToken] = useRecoilState(LoginUserAtom);

  // userIdをmemo化して何度も利用
  const userId = useMemo(() => {
    if (!persistAccessToken) return null;
    const decoded = JSON.parse(window.atob(persistAccessToken.split('.')[1]));

    if (!decoded) return null;
    const id = decoded.id;
    return id;
  }, [persistAccessToken]);

  const login = async (email: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    });
    const data = await res.json();
    setPersistAccessToken(data.token);
  };

  const logout = () => {
    setPersistAccessToken(null);
  };

  const isLoggedIn = persistAccessToken ? true : false;

  return { login, logout, isLoggedIn, userId };
};
