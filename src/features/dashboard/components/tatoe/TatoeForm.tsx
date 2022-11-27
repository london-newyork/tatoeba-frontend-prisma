import React, { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { RegisterImageForExplanationTatoe } from '../../../register/components/register-tatoe-child/RegisterImageForExplanationTatoe';
import { RegisterTatoeDescription } from '../../../register/components/register-tatoe-child/RegisterTatoeDescription';
import { RegisterTatoeShortParaphrase } from '../../../register/components/register-tatoe-child/RegisterTatoeShortParaphrase';
import { RegisterTatoeTitle } from '../../../register/components/register-tatoe-child/RegisterTatoeTitle';
import { RegisterTatoeBtn } from '../../../../commons/components/btn/RegisterTatoeBtn';
import { useTatoeCancel } from '../hooks/useTatoeCancel';
import { Tatoe } from '../../../../types/types';
import { TatoeAtom } from '../../../../utils/atoms/TatoeAtom';

/*
* TODO: 煩雑なフォームのstateを管理の効率化のために
React Hook Formを検討する。
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
  onSubmit,
  setTitle,
  title,
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

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <RegisterTatoeTitle title={title} setTitle={setTitle} />
      <RegisterTatoeShortParaphrase shortParaphrase={shortParaphrase} setShortParaphrase={setShortParaphrase} />
      <RegisterTatoeDescription description={description} setDescription={setDescription} />
      <RegisterImageForExplanationTatoe
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        defaultImageUrl={defaultImageUrl}
        setDefaultImageUrl={setDefaultImageUrl}
        deleteExplanationImage={deleteExplanationImage}
      />
      <div className="mx-auto md:mx-0 md:justify-end pt-6 flex flex-col smd:flex-row gap-6">
        <RegisterTatoeBtn variant="cancel" btnName="キャンセル" btnType="button" onClickCancel={handleClickCancel} />
        {!isUpdate ? (
          <RegisterTatoeBtn variant="create" btnName="投稿する" btnType="submit" />
        ) : (
          <RegisterTatoeBtn variant="update" btnName="更新する" btnType="submit" />
        )}
      </div>
    </form>
  );
};
