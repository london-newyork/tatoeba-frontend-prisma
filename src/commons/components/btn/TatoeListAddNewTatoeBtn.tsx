import React from 'react';
import Link from 'next/link';
import { SVGIcons } from '../SVGIcons';

export const TatoeListAddNewTatoeBtn = () => {
  return (
    <div
      className="
    absolute
    top-4
    right-0
    sm:-top-2
    sm:right-0
    md:-right-2
    "
    >
      <Link href="/registers">
        <div
          className="
          flex
          h-8
          w-8
          rounded-full
          bg-dark_green
          "
        >
          <SVGIcons
            d="M12 4v16m8-8H4"
            strokeWidth={2.2}
            className="m-auto h-4 w-4 text-gray-800"
            name="tatoe-list-add"
          />
        </div>
      </Link>
    </div>
  );
};
