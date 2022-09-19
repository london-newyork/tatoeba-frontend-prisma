import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { User } from '../types/types';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';

export const useUserInfo = (userId: string | null) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log('useUserInfo after ### useState ### user', user);
  const [avatarImagePath, setAvatarImagePath] = useState('');

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

  // これだとマウント時に機能するわけではないためuseEffect使いたい
  // => 使うとエラーになる
  const getUserProfileImage = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw '画像取得エラーがおきました。';
        }
        return res.blob();
      })
      .then((blobData) => {
        // TODO Profile avatarの<img src>に変数を入れる
        // 直接 GCS URLをsrc指定だと使い切りタイプ?のようなので
        // 一意のURLを作成して変数化、ただし同じURL使って再度画像を取得することはできない

        // 赤いボタンを押すとblobは生成されてる
        const newAvatarImagePath = URL.createObjectURL(blobData);
        console.log(newAvatarImagePath);
        setAvatarImagePath(newAvatarImagePath);
      });
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
    // TODO APIでGCS登録されたデータが返ってきてそれをフロントのアバターに登録？
    // Blob: {size:}が返ってきた
    const data = await res.blob();
    console.log(data);
  };
  return {
    user,
    updateUser,
    isLoading,
    error,
    updateUserProfileImage,
    getUserProfileImage,
    avatarImagePath,
  };
};
