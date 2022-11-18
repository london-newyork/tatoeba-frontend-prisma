import React, { VFC } from "react";
import { Layouts } from "../types/types";

export const TopMainLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
        pt-[100px]
        bg-white
        "
    >
      {props.children}
    </main>
  );
};
