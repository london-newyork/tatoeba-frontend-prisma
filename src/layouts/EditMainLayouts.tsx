import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const EditMainLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
    md:pt-[100px]
    sm:pt-[80px]
    bg-gray-100
    h-screen
    px-7
    md:px-18
    mx-auto
    pt-9"
    >
      <div
        className="
      lg:px-12
      px-7
      pt-12
      pb-10
      rounded-md
      bg-white
      mx-auto
      max-w-[1000px]
      "
      >
        {props.children}
      </div>
    </main>
  );
};
