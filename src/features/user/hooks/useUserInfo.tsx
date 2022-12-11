import { useAccessToken, useSetProfileImage } from '@Features/auth/store';
import { useEffect, useState } from 'react';
import { User } from '@Types/types';

export const useUserInfo = (userId: string | null) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const accessToken = useAccessToken();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const setProfileImage = useSetProfileImage();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // 自分のプロフィール(名前など)を取得
    const main = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      });
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({ userName })
    });

    const { updatedData } = await res.json();
    setUser(updatedData);
  };

  const updateUserProfileImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: formData
    });
    setProfileImage();
  };
  return {
    user,
    updateUser,
    isLoading,
    error,
    updateUserProfileImage
  };
};
