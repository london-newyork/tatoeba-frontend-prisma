import React, { VFC } from "react";
import { TatoeListAddNewTatoeBtn } from "../btn/TatoeListAddNewTatoeBtn";
import { Layouts } from "../types/types";

export const TatoeListWrapper: VFC<Layouts> = (props) => {
  return (
    <div>
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
        position
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
