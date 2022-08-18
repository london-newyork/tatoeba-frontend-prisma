import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

// userIdを鍵に、User情報を引き出す
export const useUserInfo = (userId: string) => {
  const [user, setUser] = useState(null);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  console.log('persistAccessToken *** useUserInfo **** : ', persistAccessToken); // 確認済み
  console.log('userId *** useUserInfo **** : ', userId);
  // ログイン直後は確認できるが、永続化していないため１回きり。

  // dataは確認できない
  useEffect(() => {
    const main = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/:id `,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${persistAccessToken}`,
          },
        }
      );
      // const { data } = await res.json();
      const data = await res.json();
      console.log('******* data *******', data);
      if (!data) {
        throw Error('データがありません');
      }
      // data入ってないのでエラーになる

      const userName: string | null = data.userName;
      setUser(userName);
    };
    main();
  }, [userId]);
  // 今のところこれは401 UnAuthorizedになる

  // なぜuserIdが変化したらuserEffectが作用するようにしているのか
  // なぜuserにまとめるのか？？
  return user;
};
