import React from 'react';

export const EditIconBtn = () => {
  return (
    <div>
      <button
        className='
        h-7
        w-7
        position
        relative
        bg-white
        transition-all
        rounded-full
        '
      >
        <ul
          className='
          flex
          flex-col
          absolute
          -top-[2px]
          left-1
          hover:text-white
          '
        >
          <li>
            <span
              className='
              material-symbols-outlined
              text-xl
              header-icon'
            >
              edit_square
            </span>
          </li>
        </ul>
      </button>
    </div>
  );
};
