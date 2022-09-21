import { useRecoilState } from 'recoil';
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
  // 前提として、persistAccessToken は hooks で生成され Recoil で永続化されている

  // getStorageでjwtのトークンをマウント時に取得している
  // usePersistAccessToken はどういうものなのかがわからない..

  // persistAccessToken.ts =>

  // export const usePersistAccessToken = () => {
  //   const [persistAccessToken, setPersistAccessToken] =
  //     useRecoilState(LoginUserAtom);
  //   useEffect(() => {
  //     setPersistAccessToken(getStorage('jwt'));
  //   }, []);
  //   return { persistAccessToken };
  // };

  // してるけど useEffect の中をコメントアウトしてもJWTができている..=>

  // *** もう一度ログインからの JWT トークン の流れを確認 ***
  // ログイン時に バックエンド で生成された JWTトークン を
  // フロントでは ログインAPI の レスポンス で受け取り =>
  // その token を setPersistAccessToken して < persistAccessToken > が受け取っている

  // で、それを LoginUserAtom で永続化して使いまわしている ..

  // ただこれをつかって　生成した < userId > や さらにそれを使った < user > が　度々 null になったりする。

  // < userId > は useAuth で、サーバー側で生成した < id > を persistAccessToken からデコードして < userId > として使うことにして、さらにそれを useMemo して使いまわしている

  // userIdをmemo化して何度も利用
  const userId = useMemo(() => {
    console.log('persistAccessToken : ', persistAccessToken);
    if (!persistAccessToken) return null;
    const decoded = JSON.parse(window.atob(persistAccessToken.split('.')[1]));
    // console.log('decoded', decoded);

    if (!decoded) return null;
    const id = decoded.id;
    return id;
  }, [persistAccessToken]);

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
  };

  const logout = () => {
    setPersistAccessToken(null);
  };

  const isLoggedIn = persistAccessToken ? true : false;

  return { login, logout, isLoggedIn, userId };
};
