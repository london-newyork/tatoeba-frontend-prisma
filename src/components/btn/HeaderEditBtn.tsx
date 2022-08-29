import { PencilAltIcon } from '@heroicons/react/outline';
import React from 'react';

export const HeaderEditBtn = () => {
  return (
    <div>
      <button
        className='
              hover:bg-mint_green
              bg-light_green
              rounded-full
              h-7
              w-7'
      >
        <ul
          className='
                  flex
                  flex-col
                  hover:text-white
                  items-center'
        >
          <li>
            <PencilAltIcon
              className='
                      h-4
                      w-4
                      text-q_dark_green
                      duration-300'
            />
          </li>
        </ul>
      </button>
    </div>
  );
};
