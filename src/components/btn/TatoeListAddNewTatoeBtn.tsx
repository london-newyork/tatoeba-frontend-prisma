import React from 'react';
import Link from 'next/link';

export const TatoeListAddNewTatoeBtn = () => {
  return (
    <div
      className='
      absolute
      top-4
      right-4
      md:top-5
      md:right-6
      lg:top-6
      lg:right-7
      '
    >
      <Link href='/Register'>
        <button
          type='button'
          className='
          w-9
          h-9
          bg-dark_green
          rounded-full'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-800 m-auto'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4v16m8-8H4'
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};
