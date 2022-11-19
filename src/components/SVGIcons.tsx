import React from 'react';

type SVGIconsProps = {
  d: string;
  strokeWidth: number;
  className: string;
  name: string;
};
export const SVGIcons = ({ d, strokeWidth, className, name }: SVGIconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
};
