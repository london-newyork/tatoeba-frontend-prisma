import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { useRecoilState } from 'recoil';
import { getStorage } from '../../lib/storage';
import { useEffect } from 'react';

export const usePersistAccessToken = () => {
  const [persistAccessToken, setAccessToken] =
    useRecoilState<string>(LoginUserAtom);
  useEffect(() => {
    // if (!persistAccessToken) {
    //   throw new Error();
    // }
    setAccessToken(getStorage('jwt'));
  }, []);
  return { persistAccessToken };
};
