import React from 'react';
import { Tatoe } from '../../types/types';

export const TatoeListCreatedAt = ({ createdAt }: Pick<Tatoe, 'createdAt'>) => {
  return (
    <div>
      <li
        className='
        tatoe-list-created-at
        w-[124px]'
      >
        {createdAt}
      </li>
    </div>
  );
};
