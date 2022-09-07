import { useRecoilValue } from 'recoil';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

type UseApiOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

export const useApi = (url: string, { method }: UseApiOptions) => {
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  const api = async (sendData?: any): Promise<any> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${persistAccessToken}`,
      },

      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    return data;
  };

  return { api };
};
