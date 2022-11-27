import { LoginUserAtom } from '../../../../utils/atoms/LoginUserAtom';
import { useRecoilState } from 'recoil';
import { getStorage } from '../../../../lib/storage';
import { useEffect } from 'react';

export const usePersistAccessToken = () => {
  const [persistAccessToken, setPersistAccessToken] = useRecoilState(LoginUserAtom);
  useEffect(() => {
    setPersistAccessToken(getStorage('jwt'));
  }, []);
  return { persistAccessToken };
};
