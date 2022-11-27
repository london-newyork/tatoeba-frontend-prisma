import React, { VFC } from 'react';
import { TatoeListAddNewTatoeBtn } from '../../commons/components/btn/TatoeListAddNewTatoeBtn';
import { Layouts } from '../../types/types';

export const TatoeListLayouts: VFC<Layouts> = (props) => {
  return (
    <div
      className="
      mx-auto
      mt-12
      h-auto
      w-[320px]
      rounded-2xl
      border
      border-gray-800
      bg-white
      px-4
      pb-20
      shadow-plane_2xl
      sm:mt-0
      sm:w-full
      sm:pt-7
      md:px-7
      lg:min-w-[800px]
      lg:px-9
      "
    >
      <div
        className="
        relative
        min-w-[286px]
        bg-inherit
        pt-6
        sm:min-w-[286px]
        sm:pt-0
        md:min-w-[364px]
        md:pt-0
        lg:min-w-[726px]
        "
      >
        <TatoeListAddNewTatoeBtn />
        <div>
          <h2
            className="
            text-md
            pb-2
            text-gray-600
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
