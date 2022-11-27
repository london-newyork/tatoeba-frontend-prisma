import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const EditMainLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
    md:px-18
    mx-auto
    h-screen
    bg-gray-100
    px-7
    pt-9
    sm:pt-[80px]
    md:pt-[100px]"
    >
      <div
        className="
      mx-auto
      max-w-[1000px]
      rounded-md
      bg-white
      px-7
      pt-12
      pb-10
      lg:px-12
      "
      >
        {props.children}
      </div>
    </main>
  );
};
