import Link from 'next/link';
import React, { VFC } from 'react';
import { TatoeListAddNewTatoeBtn } from '../btn/TatoeListAddNewTatoeBtn';
import { Layouts } from '../types/types';

export const TatoeListWrapper: VFC<Layouts> = (props) => {
  return (
    <div>
      <TatoeListAddNewTatoeBtn />
      <div
        className='
        pt-6
        sm:pt-0
        md:pt-0
        position'
      >
        <div>
          <h2
            className='
            text-md
            text-gray-600
            pb-2
            '
          >
            [投稿一覧]
          </h2>
        </div>
        {props.children}
      </div>
    </div>
  );
};
