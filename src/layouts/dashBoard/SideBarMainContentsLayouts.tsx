import { VFC } from 'react';
import { DashboardEditTatoeBtn } from '../../commons/components/btn/DashBoardEditTatoeBtn';
import { DashboardUserHomeBtn } from '../../commons/components/btn/DashBoardUserHomeBtn';

export const SideBarMainContentsLayouts: VFC = (props) => {
  return (
    <div
      className="
            max-w-[64px]
            fixed
            md:left-5
            md:top-1/3
            right-[22px]
            top-[60px]
            "
    >
      <div
        className="
                flex
                md:flex-col
                flex-row
                sm:gap-y-8
                gap-x-5
                "
      >
        <DashboardUserHomeBtn />
        <DashboardEditTatoeBtn />
      </div>
    </div>
  );
};
