import React, { VFC } from 'react';
import { Layouts } from '../../types/types';

export const RemoveMemberLayouts: VFC<Layouts> = (props) => {
  return (
    <div
      className="
    mx-auto
    h-auto
    w-auto
    flex-col
    items-center
    justify-center
    rounded-md
    bg-white
    px-7
    pt-12
    pb-10
    text-center
    lg:px-12
    "
    >
      {props.children}
    </div>
  );
};
