import { MenuBtn } from '../../btn/MenuBtn';
import React, { VFC } from 'react';
import { WithoutPropsChildrenLayouts } from '../../types/types';
import { SideBarMainContentsLayouts } from './SideBarMainContentsLayouts';

export const SideBarLayouts:VFC<WithoutPropsChildrenLayouts> = (props) => {
  return (
    <div
    className='
    bg-gray-900
    min-w-[64px]
    max-w-[64px]
    flex
    flex-col
    h-full
    '
    >
      <MenuBtn />
      <SideBarMainContentsLayouts />
    </div>

  )
}