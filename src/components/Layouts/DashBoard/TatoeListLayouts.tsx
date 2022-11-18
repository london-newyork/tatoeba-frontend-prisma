import React, { VFC } from "react";
import { Layouts } from "../../types/types";

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
      {props.children}
    </div>
  );
};
