import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TatoeForm } from '../../components/DashBoard/Tatoe/TatoeForm';
import { useAlert } from '../../components/hooks/useAlert';
import { useApi } from '../../components/hooks/useApi';
import { useAuth } from '../../components/hooks/useAuth';
import { useTatoe } from '../../components/hooks/useTatoe';
import { useUserInfo } from '../../components/hooks/useUserInfo';
import { Tatoe } from '../../components/types/types';
import { LoginUserAtom } from '../../components/utils/atoms/LoginUserAtom';
import { TatoeAtom } from '../../components/utils/atoms/TatoeAtom';

export type UpdateTatoePage = {
  tId: string | string[];
  onCreateTatoe: () => unknown;
};

export const UpdateTatoePage = ({ tId, onCreateTatoe }: UpdateTatoePage) => {
  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [createdAt, setCreatedAt] = useState<string | null>('');
  const [updatedAt, setUpdatedAt] = useState<string | null>('');

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string | null>(null);

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const { api: deleteTatoeImageApi } = useApi(
    `/tatoe/${tId}/explanation_image`,
    { method: 'DELETE' }
  );

  const { updateTatoe, getTatoe } = useTatoe({
    tId,
    tatoe,
    user,
    setTatoe,
    persistAccessToken,
    userId,
    title,
    shortParaphrase,
    description,
    createdAt,
    updatedAt,
    router: null,
  });

  useEffect(() => {
    const getUserTatoeList = async () => {
      await getTatoe();
    };
    getUserTatoeList();
  }, [tId]);

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

    const formData = new FormData(e.currentTarget);
    await updateTatoe({
      tId,
      userId,
      formData,
    });

    await onCreateTatoe();
  };

  /* DELETE */
  const handleDeleteExplanationImage: MouseEventHandler<
    HTMLButtonElement
  > = async (e) => {
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
      tId={tId}
      tatoe={tatoe}
      setTatoe={setTatoe}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />
  );
};
