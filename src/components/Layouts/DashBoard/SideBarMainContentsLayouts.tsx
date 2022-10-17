import { VFC } from 'react';
import { DashBoardEditTatoeBtn } from '../../btn/DashBoardEditTatoeBtn';
import { DashBoardUserHomeBtn } from '../../btn/DashBoardUserHomeBtn';

export const SideBarMainContentsLayouts: VFC = (props) => {
  return (
    <div
      className='
            max-w-[64px]
            fixed
            md:left-0
            md:top-1/3
            right-[22px]
            top-[58px]
            '
    >
      <div
        className='
                flex
                md:flex-col
                flex-row
                sm:gap-y-8
                gap-x-6
                '
      >
        <DashBoardUserHomeBtn />
        <DashBoardEditTatoeBtn />
      </div>
    </div>
  );
};
