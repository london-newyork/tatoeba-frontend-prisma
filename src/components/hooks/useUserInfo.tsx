import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

export const useUserInfo = (userId: string) => {
  const [user, setUser] = useState(null);
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  useEffect(() => {
    const main = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${persistAccessToken}`,
          },
        }
      );
      const { data } = await res.json();
      if (!data) {
        throw Error('データがありません');
      }

      const userName: string | null = data.userName;
      setUser(userName);
    };
    main();
  }, [userId]);

  const updateUser = async (data: { userName?: string }) => {};
  return user;
};
