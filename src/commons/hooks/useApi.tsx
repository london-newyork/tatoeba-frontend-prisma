import { useAccessToken } from '@Features/auth/store';

type UseApiOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

export const useApi = (url: string, { method }: UseApiOptions) => {
  const accessToken = useAccessToken();

  const api = async (sendData?: any): Promise<any> => {
    const isFormData = sendData instanceof FormData;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' })
      },

      body: method === 'GET' ? null : isFormData ? sendData : JSON.stringify(sendData)
    });

    const data = await res.json();
    return data;
  };

  return { api };
};
