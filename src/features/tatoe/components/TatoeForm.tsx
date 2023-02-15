import { RegisterTatoeBtn } from '@Commons/components/btn/RegisterTatoeBtn';
import { RegisterImageForExplanationTatoe } from '@Commons/components/register/register-tatoe-child/RegisterImageForExplanationTatoe';
import { RegisterTatoeDescription } from '@Commons/components/register/register-tatoe-child/RegisterTatoeDescription';
import { RegisterTatoeShortParaphrase } from '@Commons/components/register/register-tatoe-child/RegisterTatoeShortParaphrase';
import { RegisterTatoeTitle } from '@Commons/components/register/register-tatoe-child/RegisterTatoeTitle';
import { Tatoe } from '@Types/types';
import React, { Dispatch, /* FormEventHandler, */ MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useTatoeCancel } from '../hooks/useTatoeCacel';
import { useForm, FormProvider, SubmitHandler, FieldValues } from 'react-hook-form';

type TatoeFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
  defaultImageUrl: string | null;
  setDefaultImageUrl: Dispatch<SetStateAction<string | null>>;
  deleteExplanationImage?: MouseEventHandler<HTMLButtonElement>;
  tatoe: Tatoe[];
  setTatoe: SetterOrUpdater<Tatoe[]>;
  tId: string | string[] | null;
  userId?: string | null;
  title?: string | null;
  shortParaphrase?: string | null;
  description?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  imageUrl?: string | null;
  imageId?: string | null;
  formData?: FormData | null;
};

export const TatoeForm = ({
  onSubmit,
  imageUrl,
  setImageUrl,
  defaultImageUrl,
  setDefaultImageUrl,
  deleteExplanationImage,
  tId,
  tatoe,
  setTatoe
}: TatoeFormProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  // const [tatoe, setTatoe] = useRecoilState(TatoeAtom);

  useEffect(() => {
    if (tId) {
      setIsUpdate(true);
    }
  }, [tId]);

  useEffect(() => {
    if (register === null || errors === null) {
      return;
    }
  }, []);

  const { handleClickCancel } = useTatoeCancel({ tId, tatoe, setTatoe });
  const methods = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = methods;
  // const onSubmit: SubmitHandler<Tatoe> = (data) => console.log('data:', data);

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <RegisterTatoeTitle register={register} errors={errors} />
        <RegisterTatoeShortParaphrase register={register} errors={errors} />
        <RegisterTatoeDescription register={register} errors={errors} />
        <RegisterImageForExplanationTatoe
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
          defaultImageUrl={defaultImageUrl}
          setDefaultImageUrl={setDefaultImageUrl}
          deleteExplanationImage={deleteExplanationImage}
        />
        <div className="mx-auto flex flex-col gap-6 pt-6 smd:flex-row md:mx-0 md:justify-end">
          <RegisterTatoeBtn variant="cancel" btnName="キャンセル" btnType="button" onClickCancel={handleClickCancel} />
          {!isUpdate ? (
            <RegisterTatoeBtn variant="create" btnName="投稿する" btnType="submit" />
          ) : (
            <RegisterTatoeBtn variant="update" btnName="更新する" btnType="submit" />
          )}
        </div>
      </form>
    </FormProvider>
  );
};
