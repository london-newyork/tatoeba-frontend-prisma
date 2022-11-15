import React from 'react';
import { Tatoe } from '../types/types';

export const SearchResultListItemText = ({
  title,
  shortParaphrase,
}: Pick<Tatoe, 'shortParaphrase' | 'title'>) => {
  return (
    <span className='group-hover:text-q_dark_green'>
      <li>
        {title}を例えると{shortParaphrase}
      </li>
    </span>
  );
};
