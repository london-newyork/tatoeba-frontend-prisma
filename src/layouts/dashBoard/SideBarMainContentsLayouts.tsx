import { VFC } from 'react';
import { DashboardEditTatoeBtn } from '../../commons/components/btn/DashBoardEditTatoeBtn';
import { DashboardUserHomeBtn } from '../../commons/components/btn/DashBoardUserHomeBtn';

export const SideBarMainContentsLayouts: VFC = (props) => {
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
