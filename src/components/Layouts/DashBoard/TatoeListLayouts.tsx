import React, { VFC } from 'react';
import { TatoeListAddTatoeBtn } from '../../btn/TatoeListAddTatoeBtn';
import { Layouts } from '../../types/types';

export const TatoeListLayouts: VFC<Layouts> = (props) => {
  return (
    <div
      className='
    bg-white
    lg:px-12
    px-4
    md:px-7
    sm:pt-12
    pb-20
    mt-12
    sm:mt-0
    rounded-2xl
    border
    border-gray-800
    shadow-plane_2xl
    mx-auto
    h-auto
    w-[320px]
    md:w-full
    lg:min-w-[800px]
    position
    relative
    '
    >
      {props.children}
    </div>
  );
};
