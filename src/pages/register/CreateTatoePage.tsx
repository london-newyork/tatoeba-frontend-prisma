import React, { FormEventHandler, useState } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TatoeAtom } from '../../utils/atoms/TatoeAtom';
// import { LoginUserAtom } from '../../utils/atoms/LoginUserAtom';
import { useAuth } from '@Features/auth/hooks/useAuth';
import { useUserInfo } from '@Features/user/hooks/useUserInfo';
import { useTatoe } from '@Features/dashboard/hooks/useTatoe';
import { useAlert } from '@Commons/hooks/useAlert';

import { TatoeForm } from '@Features/tatoe/components/TatoeForm';
import { useAccessToken } from '@Features/auth/store';

export default function CreateTatoePage() {
  const router = useRouter();

  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [createdAt, setCreatedAt] = useState<string | null>('');
  const [updatedAt, setUpdatedAt] = useState<string | null>('');

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string | null>(null);

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  /*   const persistAccessToken = useRecoilValue(LoginUserAtom); */
  const accessToken = useAccessToken();
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const { createTatoe } = useTatoe({
    tId: null,
    router: null,
    tatoe,
    user,
    setTatoe,
    /*  persistAccessToken, */
    accessToken,
    userId,
    title,
    shortParaphrase,
    description,
    createdAt,
    updatedAt
  });

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { alertRegisterTatoe, noInputsData } = useAlert({
      userId,
      user,
      title,
      shortParaphrase,
      description
    });
    if (noInputsData) {
      alertRegisterTatoe();
      return;
    }
    const formData = new FormData(e.currentTarget);

    await createTatoe({
      formData
    });

    router.push({
      pathname: '/dashboard/user-tatoe-list'
    });
  };

  return (
    <TatoeForm
      onSubmit={handleOnSubmit}
      title={title}
      setTitle={setTitle}
      shortParaphrase={shortParaphrase}
      setShortParaphrase={setShortParaphrase}
      description={description}
      setDescription={setDescription}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      defaultImageUrl={defaultImageUrl}
      setDefaultImageUrl={setDefaultImageUrl}
    />
  );
}
