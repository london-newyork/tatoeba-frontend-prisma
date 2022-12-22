import { getStorage } from '../../../lib/storage';
import { useEffect } from 'react';
import { useAccessToken, useSetAccessToken } from '../store';

export const usePersistAccessToken = () => {
  const accessToken = useAccessToken();
  const setAccessToken = useSetAccessToken();

  useEffect(() => {
    setAccessToken(getStorage('jwt'));
  }, []);

  return accessToken;
};
