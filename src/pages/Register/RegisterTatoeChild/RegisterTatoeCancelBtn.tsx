import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { TatoeAtom } from '../../../components/utils/atoms/TatoeAtom';
import { Tatoe } from '../../../components/types/types';

export const RegisterWordCancelBtn = (props: Tatoe) => {
  const { query_tId, title, shortParaphrase, description, creationTime } =
    props;
  const router = useRouter();

  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  const handleClickCancel = () => {
    if (query_tId) {
      const newWords = tatoe.map((item) => {
        if (item.tId === query_tId) {
          return {
            tId: item.tId,
            title,
            shortParaphrase,
            description,
            creationTime,
          };
        } else {
          return item;
        }
      });
      setTatoe(newWords);

      tatoe.map((item) => {
        if (item.tId === query_tId) {
          router.push({
            pathname: '/DashBoard',
          });
        }
      });
    }
  };

  return (
    <div className='flex justify-end'>
      <button
        onClick={handleClickCancel}
        type='submit'
        className='
      p-3
      w-[200px]
      rounded-full
      bg-white
      text-gray-800
      border-gray-800
      border
      text-lg
      hover:bg-opacity-90
    '
      >
        キャンセル
      </button>
    </div>
  );
};
