import React, { VFC } from "react";
import { Layouts } from "../types/types";

export const AuthLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
    pt-[100px]
    bg-gray-100
    h-screen
    px-7
    md:px-18
    mx-auto
    "
    >
      <section
        className="
                px-2
                md:px-0
                mx-auto
                flex
                justify-center
                "
      >
        <div
          className="
                    bg-white
                    px-7
                    pb-7
                    rounded-3xl
                    border-[1px]
                    border-gray-800
                    min-w-[21rem]
                    md:w-[24rem]
                    h-[31.25rem]
                    flex
                    flex-col
                    items-center
                    "
        >
          {props.children}
        </div>
      </section>
    </main>
  );
};
