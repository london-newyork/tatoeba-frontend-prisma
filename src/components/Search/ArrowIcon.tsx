import React from 'react';
import { SVGIcons } from '../SVGIcons';

export const ArrowIcon = () => {
  return (
    <div>
      <span
        className="
   rounded-full
   bg-gray-800
   border-2
   border-gray-800
   flex
   justify-center
   items-center
   group-hover:bg-q_dark_green
   group-hover:border-q_dark_green
   "
      >
        <SVGIcons d="M9 5l7 7-7 7" strokeWidth={0.9} className="arrow-icon-m" name="arrow" />
      </span>
    </div>
  );
};
