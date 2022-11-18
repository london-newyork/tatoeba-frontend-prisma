import React from "react";

export const ArrowIcon = () => {
  return (
    <div>
      {" "}
      <span
        className="
   h-8
   w-8
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="
      h-3
      w-3
      text-white
      group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </div>
  );
};
