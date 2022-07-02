import React, { VFC } from 'react';
import { Layouts } from '../../types/types';
import { SideBarLayouts } from './SideBarLayouts';

export const DashBoardLayouts:VFC<Layouts> = (props) => {
  return (
    <main
    className="
    bg-gray-100
    h-screen
    md:px-18
    flex
    ">
      <SideBarLayouts/>
      <div
      className='
      pt-[100px]
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
