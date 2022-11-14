import React from 'react';
import { OnClick } from '../types/types';

export const EditIconBtn = ({ onClick }: OnClick) => {
  return (
    <button className='edit-icon-btn-wrapper' onClick={onClick}>
      <ul className='edit-icon-btn-contents -top-[3px]'>
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
