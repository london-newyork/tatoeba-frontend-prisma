import React from 'react';
import { Tatoe } from '../../../types/types';

export const TatoeListCreatedAt = ({ createdAt }: Pick<Tatoe, 'createdAt'>) => {
  return (
    <>
      <li
        className="
        tatoe-list-created-at
        w-[124px]"
      >
        {createdAt}
      </li>
    </>
  );
};
