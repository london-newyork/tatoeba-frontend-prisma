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
import { UpdateTatoeBtn } from './RegisterTatoeChild/UpdateTatoeBtn';
import { useAuth } from '../../components/hooks/useAuth';
import { useUserInfo } from '../../components/hooks/useUserInfo';
import { useTatoe } from '../../components/hooks/useTatoe';

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

  const { handleOnClickCreateTatoe, handleOnclickUpdateTatoe } = useTatoe({
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
