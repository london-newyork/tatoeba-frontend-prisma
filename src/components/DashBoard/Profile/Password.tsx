import React from 'react';
import Link from 'next/link';
export const Password = () => {
  return (
    <li
      className='
      min-w-[16rem]
      profile-pw-wrapper'
    >
      <ul
        className='
        profile-pw-label-wrapper'
      >
        <li
          className='
          sm:w-[128px]
          text-sm
          text-gray-400
          '
        >
          パスワード
        </li>
        <li
          className='
          profile-pw-text
        '
        >
          ******
          <Link href='/ResetPassword'>
            <button
              className='
            pl-2
          text-gray-400
          '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </button>
          </Link>
        </li>
      </ul>
    </li>
  );
};
