import React, { useEffect, useState } from 'react';
import { TatoeBtnProps } from '../types/types';

export const UpdateTatoeBtn = (props: TatoeBtnProps) => {
  const { /* onClick,*/ query_tId } = props;

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const btnStyle = () => {
      if (query_tId) {
        setIsUpdate(true);
      }
    };
    btnStyle();
  }, [query_tId]);

  return isUpdate ? (
    <div className='flex justify-end group'>
      <button
        // onClick={onClick}
        type='submit'
        className='
        btn-m-color
        '
      >
        更新する
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
          btn-m-icon-white
          '
        >
          chevron_right
        </span>
      </div>
    </div>
  ) : null;
};
