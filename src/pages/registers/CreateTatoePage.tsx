import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { TatoeAtom } from '../../utils/atoms/TatoeAtom';

import { TatoeForm } from '@Features/tatoe/components/TatoeForm';
import { useAccessToken } from '@Features/auth/store';
import { useAuth } from '@Features/auth/hooks/useAuth';
import { useUserInfo } from '@Features/user/hooks/useUserInfo';
import { useTatoe } from '@Features/tatoe/hooks/useTatoe';
// import { useAlert } from '@Commons/hooks/useAlert';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export default function CreateTatoePage() {
  const router = useRouter();
  // TODO: 更新関数がないと機能しないためeslintを無視
  // eslint-disable-next-line
  const [title, setTitle] = useState<string>('');
  // eslint-disable-next-line
  const [shortParaphrase, setShortParaphrase] = useState<string>('');
  // eslint-disable-next-line
  const [description, setDescription] = useState<string>('');
  // eslint-disable-next-line
  const [createdAt, setCreatedAt] = useState<string>('');
  // eslint-disable-next-line
  const [updatedAt, setUpdatedAt] = useState<string>('');

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string | null>(null);

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);

  const accessToken = useAccessToken();
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const { createTatoe } = useTatoe({
    tId: null,
    router: null,
    tatoe,
    user,
    setTatoe,
    accessToken,
    userId,
    title,
    shortParaphrase,
    description,
    createdAt,
    updatedAt
  });

  // const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  const handleOnSubmit: SubmitHandler<FieldValues> = async (/* e */ data) => {
    const { title, shortParaphrase, description, image } = data;
    // e.preventDefault();

    // TODO: React hook formのバリデーション追加したので削除検討
    // eslint-disable-next-line
    // const { alertRegisterTatoe, noInputsData } = useAlert({
    //   userId,
    //   user,
    //   title,
    //   shortParaphrase,
    //   description
    // });
    // if (noInputsData) {
    //   alertRegisterTatoe();
    //   return;
    // }
    const formData = new FormData(/* e.currentTarget */);
    formData.append('title', title);
    formData.append('shortParaphrase', shortParaphrase);
    formData.append('description', description);
    formData.append('image', image);

    await createTatoe({
      formData
    });

    router.push({
      pathname: '/dashboards/user-tatoe-list'
    });
  };

  return (
    <TatoeForm
      onSubmit={handleOnSubmit}
      // title={title}
      // setTitle={setTitle}
      // shortParaphrase={shortParaphrase}
      // setShortParaphrase={setShortParaphrase}
      // description={description}
      // setDescription={setDescription}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      defaultImageUrl={defaultImageUrl}
      setDefaultImageUrl={setDefaultImageUrl}
    />
  );
}
