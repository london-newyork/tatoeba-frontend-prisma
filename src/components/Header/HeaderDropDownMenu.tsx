import React, { useCallback, useState } from 'react';
import { AccountDefaultIconBtn } from '../btn/AccountDefaultIconBtn';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { HeaderLogin } from './HeaderLogin';
import { HeaderLogout } from './HeaderLogout';
import { useDropDownMenu } from '../hooks/useDropDownMenu';

export const HeaderDropDownMenu = () => {
  const router = useRouter();
  const { logout, isLoggedIn, userId } = useAuth();

  const handleLogout = async () => {
    await logout();
    await router.push('/');
  };

  const {
    isClicked,
    isShow,
    handleDropDownMenu,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropDownMenu();

  return (
    <div className='flex flex-col items-end'>
      <AccountDefaultIconBtn userId={userId} onClick={handleDropDownMenu} />
      {(isClicked || isShow) && (
        <div
          className={`
              tool-tip-wrapper
              h-[120px]
              w-[120px]
              border-[1px]
              top-[36px]
              sm:top-[40px]
              sm:right-1/2
              right-1/4`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HeaderLogin isLoggedIn={isLoggedIn} />
          <HeaderLogout onClick={handleLogout} />
        </div>
      )}
    </div>
  );
};
