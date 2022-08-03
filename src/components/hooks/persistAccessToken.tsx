import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { useRecoilState } from 'recoil';
import { getStorage } from '../../lib/storage';
import { useEffect } from 'react';
const [accessToken, setAccessToken] = useRecoilState<string>(LoginUserAtom);

useEffect(() => {
  if (!accessToken) {
    throw new Error();
  }
  setAccessToken(getStorage('jwt'));
}, []);
