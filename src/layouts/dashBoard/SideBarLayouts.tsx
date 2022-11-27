import React, { VFC } from 'react';
import { DashboardMenuBtn } from '../../commons/components/btn/DashBoardMenuBtn';
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
        left-0
        z-10
        flex
        min-h-[48px]
        min-w-full
        max-w-full
        flex-row
        bg-black
        sm:top-12
        sm:min-w-[64px]
        sm:max-w-[64px]
        md:h-full
        md:flex-col
        "
      >
        <div
          className="
          flex
          flex-row
          md:flex-col"
        >
          <DashboardMenuBtn />
          <SideBarMainContentsLayouts />
        </div>
      </nav>
    </aside>
  );
};
