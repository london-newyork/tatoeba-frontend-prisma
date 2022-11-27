import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div
        className="
        h-[200px]
        w-full
        border-t-2
        border-gray-800
        bg-white
        pl-6
        pr-0
        sm:pl-6
        sm:pr-0
        md:px-11
        lg:px-24
        "
      >
        <div
          className="
             h-[64px]
             border-b
             border-gray-200
            "
        >
          <p
            className="
            w-full
            pt-8
            pl-0
            text-gray-500
            "
          >
            Tatoeba
          </p>
        </div>
      </div>
    </footer>
  );
};
