import React, { VFC } from 'react';
import { Layouts } from '../../types/types';

export const DashBoardLayouts:VFC<Layouts> = (props) => {
  return (
    <main
    className="
    pt-[120px]
    bg-gray-100
    h-screen
    px-7
    md:px-18
    sm:mx-18
    mx-auto
    ">
      <div
      className='
      mx-auto
      max-w-[1200px]
      flex
      lg:flex-row
      flex-col
      gap-y-8
      sm:gap-x-8
      lg:gap-x-8
      position
      '
      >
        {props.children}
      </div>
    </main>
  )
};
