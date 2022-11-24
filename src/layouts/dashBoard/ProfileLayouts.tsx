import React, { VFC } from 'react';
import { Layouts } from '../../types/types';

export const ProfileLayouts: VFC<Layouts> = (props) => {
  return (
    <div
      className="
    mx-auto
    mt-20
    h-auto
    w-full
    rounded-2xl
    border-[1px]
    border-gray-800
    bg-white
    px-7
    py-10
    shadow-plane_2xl
    sm:mt-0
    sm:w-full
    lg:px-12
    "
    >
      {props.children}
    </div>
  );
};
