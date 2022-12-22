import React from 'react';
import { Tatoe } from '@Types/types';

export const TatoeListTitle = ({ title, shortParaphrase }: Pick<Tatoe, 'shortParaphrase' | 'title'>) => {
  return (
    <div>
      <li className="tatoe-list-title">
        {title}
        <span className="text-gray-400">を例えると</span>
        {shortParaphrase}
      </li>
    </div>
  );
};
