import { LoginUserAtom } from '../../../utils/atoms/LoginUserAtom';
import { useRecoilState } from 'recoil';
import { getStorage } from '../../../lib/storage';
import { useEffect } from 'react';
import { useAccessToken, useSetAccessToken } from '../store';

export const usePersistAccessToken = () => {
  const [persistAccessToken, setPersistAccessToken] = useRecoilState(LoginUserAtom);
  const accessToken = useAccessToken();
  const setAccessToken = useSetAccessToken();

  useEffect(() => {
    setPersistAccessToken(getStorage('jwt'));
  }, []);
  // return { persistAccessToken };
  return accessToken;
};
