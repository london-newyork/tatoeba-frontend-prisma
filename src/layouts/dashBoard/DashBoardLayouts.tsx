import React, { VFC } from 'react';
import { Layouts } from '../../types/types';
import { SideBarLayouts } from './SideBarLayouts';

export const DashboardLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
      min-h-screen
      h-full
      md:px-18
      "
    >
      <div
        className="
        h-screen
        flex
        md:flex-row
        flex-col
        position
        relative
        "
      >
        <SideBarLayouts />
        <div
          className="
          absolute
          top-16
          sm:top-14
          left-[4%]
          right-[4%]
          sm:left-[10%]
          sm:right-[10%]
          md:static
          md:mx-auto
          "
        >
          <div
            className="
            position
            relative
            pt-0
            sm:pt-[60px]
            md:pt-[100px]
            pb-14
            max-w-[1200px]
            md:min-w-[640px]
            flex
            lg:flex-row
            flex-col
            gap-y-8
            sm:gap-x-8
            lg:gap-x-8
            "
          >
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};
