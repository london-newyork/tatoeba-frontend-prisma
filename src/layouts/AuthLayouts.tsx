import React, { VFC } from 'react';
import { Layouts } from '@Types/types';

export const AuthLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
    mx-auto
    h-screen
    bg-gray-100
    px-7
    pt-[100px]
    md:px-16
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
