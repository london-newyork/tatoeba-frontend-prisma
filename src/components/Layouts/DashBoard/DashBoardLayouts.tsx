import React, { VFC } from 'react';
import { Layouts } from '../../types/types';
import { SideBarLayouts } from './SideBarLayouts';

export const DashBoardLayouts:VFC<Layouts> = (props) => {
  return (
    <main
    className="
    bg-green-500
    min-h-screen
    h-full
    md:px-18
    ">
      <div
      className='
      h-screen
      flex
      md:flex-row
      flex-col
      '
      >
        <SideBarLayouts />
        <div
        className='
        sm:pt-[100px]
        pt-0
        pb-14
        max-w-[1200px]
        md:min-w-[640px]
        min-w-[375px]
        mx-auto
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
      </div>
    </main>
  )
};
