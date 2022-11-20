import React from 'react';
import Link from 'next/link';
import { SVGIcons } from '../SVGIcons';

export const TatoeListAddNewTatoeBtn = () => {
  return (
    <div
      className="
      absolute
      top-4
      sm:-top-2
      right-0
      sm:right-0
      md:-right-2
      "
    >
      <Link href="/register" legacyBehavior>
        <button
          type="button"
          className="
          w-8
          h-8
          bg-dark_green
          rounded-full"
        >
          <SVGIcons d="M12 4v16m8-8H4" strokeWidth={2} className="h-4 w-4 text-gray-800 m-auto" name="tatoe-list-add" />
        </button>
      </Link>
    </div>
  );
};
