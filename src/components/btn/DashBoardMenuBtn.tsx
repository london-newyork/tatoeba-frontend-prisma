import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { InduceWithdrawalBtn } from './InduceWithdrawalBtn';

export const DashBoardMenuBtn = () => {
  const router = useRouter();
  const handleMoveToRemoveMember = () => {
    router.push({
      pathname: '/dashboard/remove-member',
    });
  };
  const [isHover, setIsHover] = useState(true);
  const handleToolTip = useCallback(() => {
    setIsHover(!isHover);
  }, [isHover]);

  return (
    <div>
      <nav className='sidebar-menu-btn-wrapper top-[60px]'>
        <input
          type='button'
          className='
            position
            relative
            '
          onClick={handleToolTip}
        />
        <span className='material-symbols-outlined sidebar-icon-menu absolute -top-[2px] md:static md:top-0'>
          menu
        </span>
        <InduceWithdrawalBtn
          isHover={isHover}
          onClick={handleMoveToRemoveMember}
        />
      </nav>
    </div>
  );
};
