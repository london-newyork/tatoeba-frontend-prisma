import React from 'react';
import { OnClick } from '../types/types';

export const EditIconBtn = ({ onClick }: OnClick) => {
  return (
    <button
      className='
        h-7
        w-7
        position
        relative
        bg-white
        transition-all
        rounded-full
        '
      onClick={onClick}
    >
      <ul
        className='
          flex
          flex-col
          absolute
          -top-[3px]
          left-0
          hover:text-white
          '
      >
        <li>
          <span
            className='
              material-symbols-outlined
              text-xl
              header-icon'
          >
            edit_square
          </span>
        </li>
      </ul>
    </button>
  );
};
