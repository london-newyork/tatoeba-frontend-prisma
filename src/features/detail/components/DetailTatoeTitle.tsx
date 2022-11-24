import React from 'react';
import { Tatoe } from '../../../types/types';

export const DetailTatoeTitle = ({ title }: Pick<Tatoe, 'title'>) => {
  return (
    <div
      className="
      relative
      flex
      "
    >
      <h1
        className="
        pt-6
        text-4xl
        text-gray-700
        "
      >
        {title}
        をわかりやすく例えると...
      </h1>
    </div>
  );
};
