import React from "react";
import Link from "next/link";

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
      <Link href="/register">
        <button
          type="button"
          className="
          w-8
          h-8
          bg-dark_green
          rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-800 m-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};
