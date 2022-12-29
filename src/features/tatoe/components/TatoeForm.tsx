import { RegisterTatoeBtn } from '@Commons/components/btn/RegisterTatoeBtn';
import { RegisterImageForExplanationTatoe } from '@Commons/components/register/register-tatoe-child/RegisterImageForExplanationTatoe';
import { RegisterTatoeDescription } from '@Commons/components/register/register-tatoe-child/RegisterTatoeDescription';
import { RegisterTatoeShortParaphrase } from '@Commons/components/register/register-tatoe-child/RegisterTatoeShortParaphrase';
import { RegisterTatoeTitle } from '@Commons/components/register/register-tatoe-child/RegisterTatoeTitle';
import { Tatoe } from '@Types/types';
import React, { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useTatoeCancel } from '../hooks/useTatoeCacel';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

/*
* TODO: 

* このTatoeFormに親からuseState部分をpropsで渡さないことも検討
*
*/
type TatoeFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  setTitle: Dispatch<string>;
  setShortParaphrase: Dispatch<string>;
  setDescription: Dispatch<string>;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
  defaultImageUrl: string | null;
  setDefaultImageUrl: Dispatch<SetStateAction<string | null>>;
  deleteExplanationImage?: MouseEventHandler<HTMLButtonElement>;
  tatoe?: Tatoe[];
  setTatoe?: SetterOrUpdater<Tatoe[]>;
} & Tatoe;

export const TatoeForm = ({
  /* onSubmit, */
  // setTitle,
  // title,
  shortParaphrase,
  setShortParaphrase,
  description,
  setDescription,
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

  // const [title, setTitle] = useState<string | null>('');
  // const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  // const [description, setDescription] = useState<string | null>('');
  // const [createdAt, setCreatedAt] = useState<string | null>('');
  // const [updatedAt, setUpdatedAt] = useState<string | null>('');

  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  // const [defaultImageUrl, setDefaultImageUrl] = useState<string | null>(null);

  // const [tatoe, setTatoe] = useRecoilState(TatoeAtom);

  useEffect(() => {
    if (tId) {
      setIsUpdate(true);
    }
  }, [tId]);

  const { handleClickCancel } = useTatoeCancel({ tId, tatoe, setTatoe });
  const methods = useForm();
  const { handleSubmit, register } = useForm();
  const onSubmit: SubmitHandler<Tatoe> = (data) => console.log('data:', data);

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <RegisterTatoeTitle register={register} /* title={title} setTitle={setTitle}  */ />
        <RegisterTatoeShortParaphrase shortParaphrase={shortParaphrase} setShortParaphrase={setShortParaphrase} />
        <RegisterTatoeDescription description={description} setDescription={setDescription} />
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
    // <form className="flex flex-col gap-6" onSubmit={onSubmit}>
    //   <RegisterTatoeTitle title={title} setTitle={setTitle} />
    //   <RegisterTatoeShortParaphrase shortParaphrase={shortParaphrase} setShortParaphrase={setShortParaphrase} />
    //   <RegisterTatoeDescription description={description} setDescription={setDescription} />
    //   <RegisterImageForExplanationTatoe
    //     setImageUrl={setImageUrl}
    //     imageUrl={imageUrl}
    //     defaultImageUrl={defaultImageUrl}
    //     setDefaultImageUrl={setDefaultImageUrl}
    //     deleteExplanationImage={deleteExplanationImage}
    //   />
    //   <div className="mx-auto flex flex-col gap-6 pt-6 smd:flex-row md:mx-0 md:justify-end">
    //     <RegisterTatoeBtn variant="cancel" btnName="キャンセル" btnType="button" onClickCancel={handleClickCancel} />
    //     {!isUpdate ? (
    //       <RegisterTatoeBtn variant="create" btnName="投稿する" btnType="submit" />
    //     ) : (
    //       <RegisterTatoeBtn variant="update" btnName="更新する" btnType="submit" />
    //     )}
    //   </div>
    // </form>
  );
};
