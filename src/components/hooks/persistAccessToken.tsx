import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { getStorage } from '../../lib/storage';
import { useEffect } from 'react';

export const usePersistAccessToken = () => {
  // 引数にした関数とRecoilStateのもつ型とぶつかるため強引に型解決
  const [persistAccessToken, setPersistAccessToken] = useRecoilState<string>(
    LoginUserAtom as unknown as RecoilState<string>
  );
  useEffect(() => {
    setPersistAccessToken(getStorage('jwt'));
  }, []);
  return { persistAccessToken };
};
