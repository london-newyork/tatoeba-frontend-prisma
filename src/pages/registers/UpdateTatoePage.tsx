import { useAlert } from '@Commons/hooks/useAlert';
import { useApi } from '@Commons/hooks/useApi';
import { useAuth } from '@Features/auth/hooks/useAuth';
import { useAccessToken } from '@Features/auth/store';
import { TatoeForm } from '@Features/tatoe/components/TatoeForm';
import { useTatoe } from '@Features/tatoe/hooks/useTatoe';
import { useUserInfo } from '@Features/user/hooks/useUserInfo';
import { Tatoe } from '@Types/types';
import { TatoeAtom } from '@Utils/atoms/TatoeAtom';
import React, { FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export type UpdateTatoePageProps = {
  tId: string | string[];
  onCreateTatoe: () => unknown;
};

export const UpdateTatoePage = ({ tId, onCreateTatoe }: UpdateTatoePageProps) => {
  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');

  // eslint-disable-next-line
  const [createdAt, setCreatedAt] = useState<string | null>('');
  // eslint-disable-next-line
  const [updatedAt, setUpdatedAt] = useState<string | null>('');

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string | null>(null);

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  const accessToken = useAccessToken();
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const { api: deleteTatoeImageApi } = useApi(`/tatoe/${tId}/explanation_image`, { method: 'DELETE' });

  const { updateTatoe, getTatoe } = useTatoe({
    tId: tId as string, // stringしか来ない
    tatoe,
    user,
    setTatoe,
    accessToken,
    userId,
    title,
    shortParaphrase,
    description,
    createdAt,
    updatedAt,
    router: null
  });

  useEffect(() => {
    const getUserTatoeList = async () => {
      await getTatoe();
    };
    getUserTatoeList();
  }, [tId as string]);

  useEffect(() => {
    tatoe.map((item: Tatoe) => {
      if (item.tId === tId) {
        setImageUrl(item.imageUrl);
        setTitle(item.title);
        setDescription(item.description);
        setShortParaphrase(item.shortParaphrase);
      }
    });
  }, [tatoe]);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
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
    await updateTatoe({
      tId: tId as string,
      userId,
      formData
    });

    await onCreateTatoe();
  };

  // TODO: UpdateなのにDELETEが入ってる
  /* DELETE */
  const handleDeleteExplanationImage: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!defaultImageUrl && !imageUrl) {
      return;
    }
    await deleteTatoeImageApi();

    setImageUrl(null);
    URL.revokeObjectURL(defaultImageUrl);
    setDefaultImageUrl(null);
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
      deleteExplanationImage={handleDeleteExplanationImage}
      tId={tId as string}
      tatoe={tatoe}
      setTatoe={setTatoe}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />
  );
};

export default UpdateTatoePage;
