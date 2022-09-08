import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAuth } from '../hooks/useAuth';
import { HeaderEditBtn } from '../btn/HeaderEditBtn';
import { Logo } from './Logo';
import { AccountDefaultIconBtn } from '../btn/AccountDefaultIconBtn';

export const Header = () => {
  const router = useRouter();
  const { logout, isLoggedIn } = useAuth();
  const handleLogout = async () => {
    await logout();
    await router.push('/');
  };
  const [isHover, setIsHover] = useState(true);

  const handleToolTip = useCallback(() => {
    setIsHover(!isHover);
  }, [isHover]);

  return (
    <header>
      <div
        className='
        z-20
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
        position'
      >
        <Logo />
        <div
          className='
          flex
          my-auto
          gap-x-4
          md:mr-0
          fixed
          right-[14.5px]
          top-[8px]
          md:inset-auto
          md:static
          '
        >
          <div className='flex flex-col items-end'>
            <AccountDefaultIconBtn onClick={handleToolTip} />
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
                  <Link href='/DashBoard'>
                    <a>ログイン</a>
                  </Link>
                ) : (
                  <Link href='/Login'>
                    <a>ログイン</a>
                  </Link>
                )}
              </li>
              <li className='py-2 text-sm text-gray-500 hover:bg-gray-100 hover:w-full'>
                <button onClick={handleLogout}>ログアウト</button>
              </li>
            </ul>
          </div>
          <HeaderEditBtn />
        </div>
      </div>
    </header>
  );
};
