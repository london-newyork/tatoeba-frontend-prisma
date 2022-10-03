import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

type UseApiOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

export const useApi = (url: string, { method }: UseApiOptions) => {
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  const api = async (sendData?: any): Promise<any> => {
    const isFormData = sendData instanceof FormData;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${persistAccessToken}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },

      body:
        method === 'GET'
          ? null
          : isFormData
          ? sendData
          : JSON.stringify(sendData),
    });

    // 画像のとき
    // const contentType = res.headers.get('Content-Type');
    // if (method === 'GET' && contentType.match(/image/)) {
    //   const imageData = await res.blob();
    //   const blobUrl = URL.createObjectURL(imageData);
    //   return blobUrl;
    // } else {
    // 画像以外
    const data = await res.json();
    return data;
    // }
  };

  return { api };
};
