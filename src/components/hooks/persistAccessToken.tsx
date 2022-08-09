import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { RecoilState, useRecoilState } from 'recoil';
import { getStorage } from '../../lib/storage';
import { useEffect } from 'react';

export const usePersistAccessToken = () => {
  // 引数にした関数とRecoilStateのもつ型とぶつかるため強引に型解決
  const [persistAccessToken, setPersistAccessToken] = useRecoilState<string>(
    LoginUserAtom as unknown as RecoilState<string>
  );
  useEffect(() => {
    // ログインユーザー(JWTを発行された)だけがここを通れるように
    // したい..通る？

    // * ログインユーザーの流れ * //
    // ログインページ・ログイン(この時点で永続化？)=>storage.tsにhooksを
    // importする？=>このふぁいるはtsではなくReactになる？
    // ログインページにログインし、persistAccessToken..

    // 非ログインユーザーはログイン画面がでてくるようにしたい
    // =>ログインページでアクセストークンをもっていないとログイン画面が出現するように
    // { persistAccessToken ? (<Link href="/dashboard">ログイン</Link>):(<Link href"/login">ログイン</Link>)}

    // if (!persistAccessToken) {
    //   throw new Error();
    // }
    setPersistAccessToken(getStorage('jwt'));
    // persistAccessTokenが生成される
  }, []);
  return { persistAccessToken };
};
