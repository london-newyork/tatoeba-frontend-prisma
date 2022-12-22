import React, { VFC } from 'react';
import { Layouts } from '@Types/types';
import { SideBarLayouts } from './SideBarLayouts';

export const DashboardLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
      h-full
      min-h-screen
      md:px-16
      "
    >
      <div
        className="
        relative
        flex
        h-screen
        flex-col
        md:flex-row
        "
      >
        <SideBarLayouts />
        <div
          className="
          absolute
          inset-x-[4%]
          top-16
          sm:inset-x-[10%]
          sm:top-14
          md:static
          md:mx-auto
          "
        >
          <div
            className="
            relative
            flex
            max-w-[1200px]
            flex-col
            gap-y-8
            pt-0
            pb-14
            sm:gap-x-8
            sm:pt-[60px]
            md:min-w-[640px]
            md:pt-[100px]
            lg:flex-row
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
