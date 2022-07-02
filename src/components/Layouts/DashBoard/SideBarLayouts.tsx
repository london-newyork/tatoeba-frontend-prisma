import { MenuBtn } from '../../btn/MenuBtn';
import React, { VFC } from 'react';
import { WithoutPropsChildrenLayouts } from '../../types/types';
import { UserTatoeListBtn } from '../../btn/USerTatoeListBtn';

export const SideBarLayouts:VFC<WithoutPropsChildrenLayouts> = (props) => {
  return (
    <div
    className='
    bg-gray-900
    min-w-[60px]
    max-w-[60px]
    flex
    flex-col
    pt-6
    h-full
    '
    >
      <MenuBtn />
      <UserTatoeListBtn />
    </div>

  )
}