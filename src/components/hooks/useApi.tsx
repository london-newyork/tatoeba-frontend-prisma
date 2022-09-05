import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getStorage } from '../../lib/storage';
import { Tatoe } from '../types/types';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { useAuth } from './useAuth';

const persistAccessToken = useRecoilValue(LoginUserAtom);

const TokenType = {
  persistAccessToken: persistAccessToken,
  jwt: getStorage('jwt'),
} as const;

type TokenType = keyof typeof TokenType;

type AddAuthorization = {
  Authorization: `Bearer ${TokenType}`;
};

type UseApiOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'Delete';
  addAuthorization: AddAuthorization | null;
  tokenType: TokenType;
};

export const useApi = (
  url: string,
  { method, addAuthorization, tokenType }: UseApiOptions
) => {
  const { login, logout, isLoggedIn, userId } = useAuth();

  const api = async (sendData: Tatoe) => {
    //   // この中で fetch を行う
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenType}`,
      },
      body: JSON.stringify({
        sendData,
      }),
    });
    const { data } = await res.json();
  };

  return { api };
};
// 使う側
// const Hoge = () => {
//   const api = useApi(`/users/hoge/tatoe`, {
//     method: 'POST',
//     addAuthorization: AddAuthorization,
//     tokenType: 'persistAccessToken',
//   });

//   const submitTatoe = async () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const submitData = await api(title, description);
//   };
// };
