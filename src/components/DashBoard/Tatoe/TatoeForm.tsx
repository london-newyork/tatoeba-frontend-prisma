import React, {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { RegisterImageForExplanationTatoe } from '../../../pages/Register/RegisterTatoeChild/RegisterImageForExplanationTatoe';
import { RegisterTatoeDescription } from '../../../pages/Register/RegisterTatoeChild/RegisterTatoeDescription';
import { RegisterTatoeShortParaphrase } from '../../../pages/Register/RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeTitle } from '../../../pages/Register/RegisterTatoeChild/RegisterTatoeTitle';
import { CancelTatoeBtn } from '../../btn/CancelTatoeBtn';
import { CreateTatoeBtn } from '../../btn/CreateTatoeBtn';
import { RegisterTatoeBtn } from '../../btn/RegisterTatoeBtn';
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
  deleteExplanationImage?: MouseEventHandler<HTMLButtonElement>;
  tatoe?: Tatoe[];
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
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  console.log(tId);
  useEffect(() => {
    if (tId) {
      setIsUpdate(true);
    }
  }, [tId]);

  // cancel btn あとでけす
  const router = useRouter();

  // const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  const handleClickCancel = () => {
    if (tId) {
      const newTatoe = tatoe.map((item) => {
        if (item.tId === tId) {
          return {
            tId: item.tId,
            title: item.title,
            shortParaphrase: item.shortParaphrase,
            description: item.description,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          };
        } else {
          return item;
        }
      });
      setTatoe(newTatoe);

      tatoe.map((item) => {
        if (item.tId === tId) {
          router.push({
            pathname: '/DashBoard/UserTatoeList',
          });
        }
      });
    }
    router.push({
      pathname: '/DashBoard/UserTatoeList',
    });
  };

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
        <RegisterTatoeBtn cancel />
        <CancelTatoeBtn tId={tId} />
        {!isUpdate ? (
          <CreateTatoeBtn />
        ) : (
          <UpdateTatoeBtn
            tatoe={tatoe}
            tId={tId}
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
