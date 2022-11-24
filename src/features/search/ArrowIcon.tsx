import React from 'react';
import { SVGIcons } from '../../commons/components/SVGIcons';

export const ArrowIcon = () => {
  return (
    <div>
      <span
        className="
   flex
   items-center
   justify-center
   rounded-full
   border-2
   border-gray-800
   bg-gray-800
   group-hover:border-q_dark_green
   group-hover:bg-q_dark_green
   "
      >
        <SVGIcons d="M9 5l7 7-7 7" strokeWidth={0.9} className="arrow-icon-m" name="arrow" />
      </span>
    </div>
  );
};
