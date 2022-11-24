import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const AuthLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
    md:px-18
    mx-auto
    h-screen
    bg-gray-100
    px-7
    pt-[100px]
    "
    >
      <section
        className="
                mx-auto
                flex
                justify-center
                px-2
                md:px-0
                "
      >
        <div
          className="
                    flex
                    h-[31.25rem]
                    min-w-[21rem]
                    flex-col
                    items-center
                    rounded-3xl
                    border-[1px]
                    border-gray-800
                    bg-white
                    px-7
                    pb-7
                    md:w-[24rem]
                    "
        >
          {props.children}
        </div>
      </section>
    </main>
  );
};
