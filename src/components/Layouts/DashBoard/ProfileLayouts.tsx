import React, { VFC } from 'react';
import { Layouts } from '../../types/types';

export const ProfileLayouts: VFC<Layouts> = (props) => {
  return (
    <div
      className='
    bg-white
    lg:px-12
    px-7
    py-10
    mt-20
    sm:mt-0
    rounded-2xl
    border-[1px]
    border-gray-800
    shadow-plane_2xl
    mx-auto
    h-auto
    w-full
    sm:w-full
    '
    >
      {props.children}
    </div>
  );
};
