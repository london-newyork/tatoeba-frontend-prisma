import React, { VFC } from 'react';
import { SVGIcons } from '../commons/components/SVGIcons';
import type { Layouts } from '../types/types';

export const SearchBoxLayouts: VFC<Layouts> = (props: any) => {
  return (
    <div>
      <div
        className="
            flex
            flex-col
            pt-10
            pb-20"
      >
        <div
          className="
                mx-auto
                h-[48px]
                w-[18rem]
                rounded-full
                border-2
                border-gray-800
                bg-dark_green
                px-6
                text-gray-800
                drop-shadow-sm
                md:mx-0
                "
        >
          <div
            className="
                        pointer-events-none
                        absolute
                        left-0
                        -top-[16px]
                        flex
                        h-[44px]
                        w-[48px]
                        translate-y-4
                        items-center
                        justify-center
                        rounded-l-full
                        bg-dark_green
                        "
          >
            <SVGIcons
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeWidth={2}
              className="search-box-icon"
              name="search-box"
            />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
