import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';
import { Tatoe } from '../types/types';

export const CancelTatoeBtn = (props: Tatoe) => {
  const { tId } = props;
  const router = useRouter();

  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

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
    <div className='flex justify-end group'>
      <button
        onClick={handleClickCancel}
        type='button'
        className='
        btn-m-white
      '
      >
        キャンセル
      </button>
      <div
        className='
      position
      relative
      '
      >
        <span
          className='
          absolute
          material-symbols-outlined
          btn-m-icon-black'
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};
