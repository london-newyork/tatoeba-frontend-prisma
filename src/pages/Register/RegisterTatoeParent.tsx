import React, { useState } from 'react';
import { CreateTatoeBtn } from './RegisterTatoeChild/CreateTatoeBtn';
import { RegisterTatoeTitle } from './RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterTatoeShortParaphrase } from './RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeDescription } from './RegisterTatoeChild/RegisterTatoeDescription';

import { RegisterTatoeCancelBtn } from './RegisterTatoeChild/RegisterTatoeCancelBtn';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TatoeAtom } from '../../components/utils/atoms/TatoeAtom';
import { LoginUserAtom } from '../../components/utils/atoms/LoginUserAtom';
import { Tatoe } from '../../components/types/types';
import { UpdateTatoeBtn } from './RegisterTatoeChild/UpdateTatoeBtn';
import { useAuth } from '../../components/hooks/useAuth';
import { useUserInfo } from '../../components/hooks/useUserInfo';

export const RegisterTatoeParent = () => {
  const router = useRouter();
  const query = router.query;
  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [createdAt, setCreatedAt] = useState<string | null>('');
  const [updatedAt, setUpdatedAt] = useState<string | null>('');
  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const query_tId = query.tId;

  const handleOnClickCreateTatoe = async (): Promise<string> => {
    if (!userId || !user) {
      return null;
    }
    if (title === '' || shortParaphrase === '' || description === '') {
      alert('入力されていない箇所があります。');
      return;
    }

    if (user.userName === '') {
      alert('ユーザー名を登録して投稿してください。');
      return;
    }
    // 例え登録のロジックを書く
    if (!query_tId) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistAccessToken}`,
        },
        body: JSON.stringify({
          title,
          shortParaphrase,
          description,
        }),
      });
      const { data } = await res.json();
      // フロント側で使えるようにデータ加工
      const formattedData: Tatoe = {
        tId: data.id,
        userId: data.userId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        title: data.title,
        description: data.description,
        shortParaphrase: data.shortParaphrase,
      };
      const newTatoe = [formattedData, ...tatoe];

      setTatoe(newTatoe);

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }
  };

  const handleOnclickUpdateTatoe = async (): Promise<string> => {
    if (!userId || !user) {
      return null;
    }
    if (title === '' || shortParaphrase === '' || description === '') {
      alert('入力されていない箇所があります。');
      return;
    }

    if (user.userName === '') {
      alert('ユーザー名を登録して投稿してください。');
      return;
    }
    // 例え更新のロジックを書く
    if (query_tId) {
      tatoe.map(async (item: Tatoe) => {
        if (item.tId === query_tId) {
          const tId = item.tId;
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${tId}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${persistAccessToken}`,
              },
              body: JSON.stringify({
                title,
                shortParaphrase,
                description,
                tId,
                createdAt,
                updatedAt,
              }),
            }
          );
          const { data } = await res.json();

          const updatedTatoe = tatoe.map((item: Tatoe) => {
            if (item.tId === query_tId) {
              return {
                tId: item.tId,
                userId: data.userId,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
                title: data.title,
                description: data.description,
                shortParaphrase: data.shortParaphrase,
              };
            }
            return item;
          });

          setTatoe(updatedTatoe);
        }
      });
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      <RegisterTatoeTitle query={query} title={title} setTitle={setTitle} />
      <RegisterTatoeShortParaphrase
        query={query}
        shortParaphrase={shortParaphrase}
        setShortParaphrase={setShortParaphrase}
      />
      <RegisterTatoeDescription
        query={query}
        description={description}
        setDescription={setDescription}
      />
      <div className='mx-auto md:mx-0 md:justify-end pt-6 flex flex-col md:flex-row gap-6'>
        <RegisterTatoeCancelBtn
          query_tId={query.tId}
          createdAt={createdAt}
          updatedAt={updatedAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
        />
        <CreateTatoeBtn
          tatoe={tatoe}
          query_tId={query.tId}
          createdAt={createdAt}
          updatedAt={updatedAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
          onClick={handleOnClickCreateTatoe}
        />
        <UpdateTatoeBtn
          tatoe={tatoe}
          query_tId={query.tId}
          createdAt={createdAt}
          updatedAt={updatedAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
          onClick={handleOnclickUpdateTatoe}
        />
      </div>
    </div>
  );
};
