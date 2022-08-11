import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { PencilAltIcon } from '@heroicons/react/outline';
import { useAuth } from '../hooks/useAuth';

export const Header = () => {
  const [isHover, setIsHover] = useState(true);
  const router = useRouter();
  const handleToolTip = useCallback(() => {
    setIsHover(!isHover);
  }, [isHover]);

  const { logout, isLoggedIn } = useAuth();
  const handleLogout = async () => {
    await logout();
    await router.push('/');
  };

  return (
    <header>
      <div
        className='
        pl-6
        pr-0
        sm:pl-6
        sm:pr-0
        md:px-11
        lg:px-24
        bg-white
        w-full
        h-[48px]
        flex
        justify-between
        justify-items-center
        border-b-2
        border-gray-800
        fixed
        z-10'
      >
        <div className='my-auto'>
          <Link href='/'>
            <a
              className='
              text-2xl
              text-gray-700
              tracking-wider
              hover:opacity-50
              duration-300'
            >
              <span className='text-dark_green'>T</span>
              atoeba
            </a>
          </Link>
        </div>
        <div className='flex my-auto mr-3 md:mr-0'>
          <div className='flex flex-col items-end'>
            <div
              className='
              position
              my-auto
              mr-3
              bg-gray-100
              rounded-full
              h-7
              w-7
              flex
              justify-center
              items-center
              text-xs
              text-gray-500
              cursor-pointer
              '
              onClick={handleToolTip}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </div>
            <ul
              className={`
              absolute
              rounded-xl
              bg-white
              h-[120px]
              w-[120px]
              border-[1px]
              border-gray-800
              py-6
              flex
              text-center
              gap-y-1
              -z-10
              top-[48px]
              lg:right-24
              md:right-10
              ${isHover ? 'hidden' : 'flex-col'}
              `}
            >
              <li className='py-2 text-sm text-gray-500 hover:bg-gray-100 hover:w-full'>
                {isLoggedIn ? (
                  <Link href='/DashBoard'>ログイン</Link>
                ) : (
                  <Link href='/Login'>ログイン</Link>
                )}
              </li>
              <li className='py-2 text-sm text-gray-500 hover:bg-gray-100 hover:w-full'>
                <button onClick={handleLogout}>ログアウト</button>
              </li>
            </ul>
          </div>
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
      </div>
    </header>
  );
};
