import React, {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
} from 'react';
import { RegisterImageForExplanationTatoe } from '../../../pages/Register/RegisterTatoeChild/RegisterImageForExplanationTatoe';
import { RegisterTatoeDescription } from '../../../pages/Register/RegisterTatoeChild/RegisterTatoeDescription';
import { RegisterTatoeShortParaphrase } from '../../../pages/Register/RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeTitle } from '../../../pages/Register/RegisterTatoeChild/RegisterTatoeTitle';
import { CancelTatoeBtn } from '../../btn/CancelTatoeBtn';
import { UpdateTatoeBtn } from '../../btn/UpdateTatoeBtn';
import { Tatoe } from '../../types/types';

type TatoeFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  setTitle: Dispatch<SetStateAction<string | null>>;
  setShortParaphrase: Dispatch<SetStateAction<string | null>>;
  setDescription: Dispatch<SetStateAction<string | null>>;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
  defaultImageUrl: string | null;
  setDefaultImageUrl: Dispatch<SetStateAction<string | null>>;
  deleteExplanationImage: MouseEventHandler<HTMLButtonElement>;
  tatoe: Tatoe[];
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
  createdAt,
  updatedAt,
}: TatoeFormProps) => {
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
        <CancelTatoeBtn tId={tId} />
        <UpdateTatoeBtn
          tatoe={tatoe}
          tId={tId}
          createdAt={createdAt}
          updatedAt={updatedAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
        />
      </div>
    </form>
  );
};