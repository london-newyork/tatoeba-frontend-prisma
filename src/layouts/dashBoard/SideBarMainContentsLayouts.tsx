import { DashboardEditTatoeBtn } from '@Commons/components/btn/DashboardEditTatoeBtn';
import { DashboardUserHomeBtn } from '@Commons/components/btn/DashboardUserHomeBtn';
import { VFC } from 'react';

export const SideBarMainContentsLayouts: VFC = () => {
  return (
    <div
      className="
            fixed
            right-[22px]
            top-[60px]
            max-w-[64px]
            md:left-5
            md:top-1/3
            "
    >
      <div
        className="
                flex
                flex-row
                gap-x-5
                sm:gap-y-8
                md:flex-col
                "
      >
        <DashboardUserHomeBtn />
        <DashboardEditTatoeBtn />
      </div>
    </div>
  );
};
