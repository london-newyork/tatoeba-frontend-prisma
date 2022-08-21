import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

export const useUserInfo = (userId: string | null) => {
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
      setUser(data);
    };
    main();
  }, [userId]);

  const updateUser = async (data: { userName?: string }) => {
    const userName = data.userName;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistAccessToken}`,
        },
        body: JSON.stringify({ userName }),
      }
    );
    await res.json();
    setUser(data);
    console.log('user of updateUser ***** ', user.userName);
  };
  return { user, updateUser };
};
