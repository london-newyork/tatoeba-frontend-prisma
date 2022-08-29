import { DashBoardMenuBtn } from '../../btn/DashBoardMenuBtn';
import React, { VFC } from 'react';
import { WithoutPropsChildrenLayouts } from '../../types/types';
import { SideBarMainContentsLayouts } from './SideBarMainContentsLayouts';

export const SideBarLayouts: VFC<WithoutPropsChildrenLayouts> = (props) => {
  return (
    <aside
      className='
    bg-gray-900
    sm:min-w-[64px]
    sm:max-w-[64px]
    max-w-full
    flex
    md:flex-col
    flex-row
    min-h-[96px]
    md:h-full
    '
    >
      <nav
        className='
      flex
      md:flex-col
      flex-row'
      >
        <DashBoardMenuBtn />
        <SideBarMainContentsLayouts />
      </nav>
    </aside>
  );
};
