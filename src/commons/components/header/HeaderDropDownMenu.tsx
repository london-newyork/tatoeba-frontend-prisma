import React, { useEffect, useState } from 'react';
import { HeaderProfileIcon } from '../btn/HeaderProfileIcon';
import { useAuth } from '../auth/hooks/useAuth';
import { useRouter } from 'next/router';
import { HeaderLogin } from './HeaderLogin';
import { HeaderLogout } from './HeaderLogout';
import { useDropDownMenu } from '../../../commons/hooks/useDropDownMenu';
import { DropDownMenu } from '../../../commons/components/DropDownMenu';

export const HeaderDropDownMenu = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { logout, isLoggedIn, userId } = useAuth();

  const handleLogout = async () => {
    await logout();
    await router.push('/');
  };

  const { isClicked, isShow, handleDropDownMenu, handleMouseEnter, handleMouseLeave } = useDropDownMenu();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div>
          <HeaderProfileIcon
            userId={userId}
            onClick={handleDropDownMenu}
            className="account-default-icon-btn-wrapper"
          />
          <div className="flex flex-col items-end">
            <DropDownMenu
              className="
              drop-down-menu-wrapper
              h-[120px]
              w-[120px]
              border-[1px]
              top-[36px]
              "
              isClicked={isClicked}
              isShow={isShow}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <HeaderLogin isLoggedIn={isLoggedIn} />
              <HeaderLogout onClick={handleLogout} />
            </DropDownMenu>
          </div>
        </div>
      ) : null}
    </>
  );
};
