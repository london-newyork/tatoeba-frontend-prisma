import React from 'react';
import { TatoeBtnProps } from '../types/types';

export const UpdateTatoeBtn = (props: TatoeBtnProps) => {
  const { onClick } = props;

  return (
    <div className='flex justify-end'>
      <button
        onClick={onClick}
        className='
      p-3
      w-[200px]
      rounded-full
      bg-dark_green
      text-gray-800
      text-lg
      hover:bg-opacity-90
    '
      >
        更新する
      </button>
    </div>
  );
};
