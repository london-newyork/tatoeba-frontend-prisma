import { PencilAltIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const HeaderEditBtn = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <Link href='/DashBoard/UserTatoeList'>
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
        </Link>
      ) : (
        <Link href='/Login/'>
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
        </Link>
      )}
    </div>
  );
};
