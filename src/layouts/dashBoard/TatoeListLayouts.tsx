import React, { VFC } from 'react';
import { TatoeListAddNewTatoeBtn } from '../../features/btn/TatoeListAddNewTatoeBtn';
import { Layouts } from '../../types/types';

export const TatoeListLayouts: VFC<Layouts> = (props) => {
  return (
    <div
      className="
      lg:px-9
      px-4
      md:px-7
      sm:pt-7
      pb-20
      mt-12
      sm:mt-0
      rounded-2xl
      border
      border-gray-800
      shadow-plane_2xl
      mx-auto
      h-auto
      w-[320px]
      sm:w-full
      lg:min-w-[800px]
      bg-white
      "
    >
      <div
        className="
        bg-inherit
        pt-6
        sm:pt-0
        md:pt-0
        min-w-[286px]
        sm:min-w-[286px]
        md:min-w-[364px]
        lg:min-w-[726px]
        relative
        "
      >
        <TatoeListAddNewTatoeBtn />
        <div>
          <h2
            className="
            text-md
            text-gray-600
            pb-2
            "
          >
            [投稿一覧]
          </h2>
        </div>
        {props.children}
      </div>
    </div>
  );
};
