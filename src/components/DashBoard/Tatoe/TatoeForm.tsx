import React, {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { SetterOrUpdater } from 'recoil';
import { RegisterImageForExplanationTatoe } from '../../Register/RegisterTatoeChild/RegisterImageForExplanationTatoe';
import { RegisterTatoeDescription } from '../../Register/RegisterTatoeChild/RegisterTatoeDescription';
import { RegisterTatoeShortParaphrase } from '../../Register/RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeTitle } from '../../Register/RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterTatoeBtn } from '../../btn/RegisterTatoeBtn';
import { useTatoeCancel } from '../../hooks/useTatoeCancel';
import { Tatoe } from '../../types/types';

type TatoeFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  setTitle: Dispatch<SetStateAction<string | null>>;
  setShortParaphrase: Dispatch<SetStateAction<string | null>>;
  setDescription: Dispatch<SetStateAction<string | null>>;
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
  setTatoe,
  createdAt,
  updatedAt,
}: TatoeFormProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (tId) {
      setIsUpdate(true);
    }
  }, [tId]);

  const { handleClickCancel } = useTatoeCancel({ tId, tatoe, setTatoe });

  return (
    <form className='flex flex-col gap-6' onSubmit={onSubmit}>
      <RegisterTatoeTitle title={title} setTitle={setTitle} />
      <RegisterTatoeShortParaphrase
        shortParaphrase={shortParaphrase}
        setShortParaphrase={setShortParaphrase}
      />
      <RegisterTatoeDescription
        description={description}
        setDescription={setDescription}
      />
      <RegisterImageForExplanationTatoe
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        defaultImageUrl={defaultImageUrl}
        setDefaultImageUrl={setDefaultImageUrl}
        deleteExplanationImage={deleteExplanationImage}
      />
      <div className='mx-auto md:mx-0 md:justify-end pt-6 flex flex-col smd:flex-row gap-6'>
        <RegisterTatoeBtn
          variant='cancel'
          btnName='キャンセル'
          btnType='button'
          tId={tId}
          tatoe={tatoe}
          onClickCancel={handleClickCancel}
        />
        {!isUpdate ? (
          <RegisterTatoeBtn
            variant='create'
            btnName='投稿する'
            btnType='submit'
          />
        ) : (
          <RegisterTatoeBtn
            variant='update'
            btnName='更新する'
            btnType='submit'
            tId={tId}
            tatoe={tatoe}
            createdAt={createdAt}
            updatedAt={updatedAt}
            title={title}
            shortParaphrase={shortParaphrase}
            description={description}
          />
        )}
      </div>
    </form>
  );
};
