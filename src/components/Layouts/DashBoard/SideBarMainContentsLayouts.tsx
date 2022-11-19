import { VFC } from 'react';
import { DashBoardEditTatoeBtn } from '../../btn/DashBoardEditTatoeBtn';
import { DashBoardUserHomeBtn } from '../../btn/DashBoardUserHomeBtn';

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
                gap-x-6
                "
      >
        <DashBoardUserHomeBtn />
        <DashBoardEditTatoeBtn />
      </div>
    </div>
  );
};
