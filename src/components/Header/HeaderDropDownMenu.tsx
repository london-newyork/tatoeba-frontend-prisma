import React from 'react';
import { HeaderProfileIcon } from '../btn/HeaderProfileIcon';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { HeaderLogin } from './HeaderLogin';
import { HeaderLogout } from './HeaderLogout';
import { useDropDownMenu } from '../hooks/useDropDownMenu';
import { DropDownMenu } from '../DropDownMenu';
import { TriggerDropDownMenuBtn } from '../btn/TriggerDropDownMenuBtn';

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
      <HeaderProfileIcon
        userId={userId}
        onClick={handleDropDownMenu}
        wrapperStyle='account-default-icon-btn-wrapper'
      />
      <DropDownMenu
        style='tool-tip-wrapper
              h-[120px]
              w-[120px]
              border-[1px]
              top-[36px]
              sm:top-[40px]
              sm:right-1/2
              right-1/4'
        isClicked={isClicked}
        isShow={isShow}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderLogin isLoggedIn={isLoggedIn} />
        <HeaderLogout onClick={handleLogout} />
      </DropDownMenu>
    </div>
  );
};
