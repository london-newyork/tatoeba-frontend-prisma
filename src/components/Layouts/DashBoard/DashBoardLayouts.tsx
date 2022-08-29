import React, { VFC } from 'react';
import { Layouts } from '../../types/types';
import { SideBarLayouts } from './SideBarLayouts';

export const DashBoardLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className='
      bg-gray-100
      min-h-screen
      h-full
      md:px-18
      '
    >
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
          pt-0
          sm:pt-[60px]
          md:pt-[100px]
          pb-14
          max-w-[1200px]
          md:min-w-[640px]
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
  );
};
