import React, { useState } from 'react';
import { CreateTatoeBtn } from '../../components/btn/CreateTatoeBtn';
import { RegisterTatoeTitle } from './RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterTatoeShortParaphrase } from './RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeDescription } from './RegisterTatoeChild/RegisterTatoeDescription';

import { CancelTatoeBtn } from '../../components/btn/CancelTatoeBtn';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TatoeAtom } from '../../components/utils/atoms/TatoeAtom';
import { LoginUserAtom } from '../../components/utils/atoms/LoginUserAtom';
import { UpdateTatoeBtn } from '../../components/btn/UpdateTatoeBtn';
import { useAuth } from '../../components/hooks/useAuth';
import { useUserInfo } from '../../components/hooks/useUserInfo';
import { useTatoe } from '../../components/hooks/useTatoe';
import { useAlert } from '../../components/hooks/useAlert';
import { Tatoe } from '../../components/types/types';
import { RegisterImageForExplanationTatoe } from './RegisterTatoeChild/RegisterImageForExplanationTatoe';

export const RegisterTatoeParent = () => {
  const router = useRouter();
  const query = router.query;
  const query_tId = query.tId;
  // stringしか来ないので強引にasで型をつける
  const tId = query.tId as string;

  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [createdAt, setCreatedAt] = useState<string | null>('');
  const [updatedAt, setUpdatedAt] = useState<string | null>('');

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const { updateTatoe, createTatoe } = useTatoe({
    tId,
    router,
    tatoe,
    user,
    setTatoe,
    persistAccessToken,
    userId,
    title,
    shortParaphrase,
    description,
    query_tId,
    createdAt,
    updatedAt,
  });

  const handleOnClickCreateTatoe = async () => {
    if (!query_tId) {
      // データのバリデーションを行う
      const { alertRegisterTatoe, noInputsData } = useAlert({
        userId,
        user,
        title,
        shortParaphrase,
        description,
      });
      if (noInputsData) {
        alertRegisterTatoe();
        return;
      }
      await createTatoe({ title, shortParaphrase, description });

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }
  };

  const handleOnclickUpdateTatoe = async () => {
    const { alertRegisterTatoe, noInputsData } = useAlert({
      userId,
      user,
      title,
      shortParaphrase,
      description,
    });
    if (noInputsData) {
      alertRegisterTatoe();
      return;
    }

    if (query_tId) {
      tatoe.map(async (item: Tatoe) => {
        if (item.tId === query_tId) {
          const tId = item.tId;
          await updateTatoe({
            title,
            shortParaphrase,
            description,
            tId,
            userId,
          });
        }
      });
    }
    tatoe.map((item: Tatoe) => {
      if (item.tId === query_tId) {
        router.push({
          pathname: '/DashBoard/UserTatoeList',
        });
      }
    });
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
      <RegisterImageForExplanationTatoe />
      <div className='mx-auto md:mx-0 md:justify-end pt-6 flex flex-col smd:flex-row gap-6'>
        <CancelTatoeBtn query_tId={query.tId} />
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
