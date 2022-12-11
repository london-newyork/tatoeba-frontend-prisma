// 別の utils にある atom を使っちゃってる？
// import {useSetAccessToken} from "../store"
// import { LoginUserAtom } from '../../../utils/atoms/LoginUserAtom';
import { useRecoilState } from 'recoil';
import { getStorage } from '../../../lib/storage';
import { useEffect } from 'react';
import { useAccessToken, useSetAccessToken } from '../store';

/**
 * hooks の名前に合わせてファイル名も揃えると良さそう
 *
 * tsx -> ts（jsx使ってないので）
 *
 * usePersistAccessToken -> useAccessTokenで代替可能
 */

export const usePersistAccessToken = () => {
  // const [persistAccessToken, setPersistAccessToken] = useRecoilState(LoginUserAtom);
  const accessToken = useAccessToken();
  const setAccessToken = useSetAccessToken();

  useEffect(() => {
    setAccessToken(getStorage('jwt'));
  }, []);
  // return { persistAccessToken };
  return accessToken;
};
