import { useEffect } from 'react';
import { getStorage } from './storage';

export const AuthLoggedInUser = () => {
  useEffect(() => {
    const sendAuthUserAccessToken = async () => {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        headers: {
          Authorization: `Bearer ${getStorage('jwt')}`
        }
      });
      // const data = await response.json();

      // console.log(data)
    };
    sendAuthUserAccessToken();
  }, []);
};
