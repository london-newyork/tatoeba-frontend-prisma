import { useRecoilState } from 'recoil';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

export type Auth = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
};

export const useAuth = (): Auth => {
  const [persistAccessToken, setPersistAccessToken] =
    useRecoilState(LoginUserAtom);

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
    // login に成功したら、persistAccessToken に accessToken をセットする。
    setPersistAccessToken(data.token);
  };

  // recoil使うのでjwtいらない
  const logout = () => {
    setPersistAccessToken(null);
  };

  const isLoggedIn = persistAccessToken ? true : false;

  return { login, logout, isLoggedIn };
};
