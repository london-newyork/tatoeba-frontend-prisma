import React, { VFC } from 'react';
import { Layouts } from '../../types/types';

export const DashBoardLayouts:VFC<Layouts> = (props) => {
  return (
    <main
    className="
    pt-[100px]
    bg-gray-100
    h-screen
    md:px-18
    ">
      <div
      className='
      max-w-[1200px]
      mx-4
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
