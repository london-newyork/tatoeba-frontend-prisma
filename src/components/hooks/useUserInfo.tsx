import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { User } from '../types/types';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { ProfileImageAtom } from '../utils/atoms/ProfileImageAtom';

export const useUserInfo = (userId: string | null) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // console.log('useUserInfo after ### useState ### user', user);
  const setProfileImage = useSetRecoilState(ProfileImageAtom);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // 自分のプロフィール(名前など)を取得
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

    main()
      .catch(() => {
        setError('データの取得に失敗しました。');
      })
      .finally(() => {
        setIsLoading(false);
      });
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

    const { updatedData } = await res.json();
    setUser(updatedData);
    console.log('updatedData', updatedData); // 値とれてる
    console.log('!!!! user', user); // 1週遅れ
    console.log('user userName', user?.userName); // 1週遅れ
  };

  const updateUserProfileImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${persistAccessToken}`,
        },
        body: formData,
      }
    );
    setProfileImage(new Date().getTime());
    // const data = await res.blob();
    // console.log('updated data : ', data);
  };
  return {
    user,
    updateUser,
    isLoading,
    error,
    updateUserProfileImage,
  };
};
