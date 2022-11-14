import React, { useCallback, useState } from 'react';
import { AccountDefaultIconBtn } from '../btn/AccountDefaultIconBtn';
import { useAuth } from '../hooks/useAuth';

import { useRouter } from 'next/router';
import { HeaderLogin } from './HeaderLogin';
import { HeaderLogout } from './HeaderLogout';

export const HeaderTooltip = () => {
  const router = useRouter();
  const { logout, isLoggedIn, userId } = useAuth();

  const handleLogout = async () => {
    await logout();
    await router.push('/');
  };

  const [isHover, setIsHover] = useState(true);

  const handleToolTip = useCallback(() => {
    setIsHover(!isHover);
  }, [isHover]);
  return (
    <div className='flex flex-col items-end'>
      <AccountDefaultIconBtn userId={userId} onClick={handleToolTip} />
      <ul
        className={`
        tool-tip-wrapper
        h-[120px]
        w-[120px]
        border-[1px]
        top-[48px]
        ${isHover ? 'hidden' : 'flex-col'}
        `}
      >
        <HeaderLogin isLoggedIn={isLoggedIn} />
        <HeaderLogout onClick={handleLogout} />
      </ul>
    </div>
  );
};
