import React, { VFC } from 'react';
import { DashboardMenuBtn } from '../../features/btn/DashBoardMenuBtn';
import { WithoutPropsChildrenLayouts } from '../../types/types';
import { SideBarMainContentsLayouts } from './SideBarMainContentsLayouts';

export const SideBarLayouts: VFC<WithoutPropsChildrenLayouts> = () => {
  return (
    <aside
      className="
      position
      relative
      "
    >
      <nav
        className="
        fixed
        top-12
        sm:top-12
        left-0
        z-10
        bg-black
        min-w-full
        sm:min-w-[64px]
        sm:max-w-[64px]
        max-w-full
        min-h-[48px]
        md:h-full
        flex
        md:flex-col
        flex-row
        "
      >
        <div
          className="
          flex
          md:flex-col
          flex-row"
        >
          <DashboardMenuBtn />
          <SideBarMainContentsLayouts />
        </div>
      </nav>
    </aside>
  );
};
