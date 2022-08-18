import { useRecoilState } from 'recoil';
import { UserIdAtom } from '../utils/atoms/UserIdAtom';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { useMemo } from 'react';

export type Auth = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
  userId: string | null;
};

export const useAuth = (): Auth => {
  const [persistAccessToken, setPersistAccessToken] =
    useRecoilState(LoginUserAtom);
  // const [userId, setUserId] = useRecoilState<string>(UserIdAtom);

  // console.log('userId *** useAuth **** : ', userId);
  console.log('persistAccessToken **** useAuth **** ', persistAccessToken);
  // userIdをmemo化して何度も利用
  const userId = useMemo(() => {
    if (!persistAccessToken) return null;
    const decoded = JSON.parse(window.atob(persistAccessToken.split('.')[1]));
    console.log('decoded', decoded);
    console.log('decoded id ***** ', decoded.id);

    if (!decoded) return null;
    const id = decoded.id;
    return id;
  }, [persistAccessToken]);

  console.log('userId ***** useAuth *****', userId);

  const login = async (email: string, password: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
      }
    );
    const data = await res.json();
    setPersistAccessToken(data.token);
    // setUserId(data.userId);
  };

  const logout = () => {
    setPersistAccessToken(null);

    // setUserId(null);
  };

  const isLoggedIn = persistAccessToken ? true : false;

  return { login, logout, isLoggedIn, userId };
};
