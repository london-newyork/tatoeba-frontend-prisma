import React, { VFC } from 'react';
import { Layouts } from '../../types/types';

export const DashBoardLayouts:VFC<Layouts> = (props) => {
  return (
    <main
    className="
    md:pt-[100px]
    sm:pt-[80px]
    bg-gray-100
    h-screen
    px-7
    md:px-18
    sm:mx-18
    mx-auto
    pt-12
    ">
      <div
      className='
      mx-auto
      max-w-[1200px]
      flex
      lg:flex-row
      sm:flex-col
      sm:gap-y-8
      sm:gap-x-8
      lg:gap-x-8
      '
      >
        {props.children}
      </div>
    </main>
  )
};
