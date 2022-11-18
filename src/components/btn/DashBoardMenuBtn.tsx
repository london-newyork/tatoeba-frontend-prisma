import { useRouter } from 'next/router';
import React from 'react';
import { DropDownMenu } from '../DropDownMenu';
import { useDropDownMenu } from '../hooks/useDropDownMenu';
import { InduceWithdrawalBtn } from './InduceWithdrawalBtn';
import { TriggerDropDownMenuBtn } from './TriggerDropDownMenuBtn';

export const DashBoardMenuBtn = () => {
  const router = useRouter();
  const handleMoveToRemoveMember = () => {
    router.push({
      pathname: '/dashboard/remove-member',
    });
  };
  const {
    isClicked,
    isShow,
    handleDropDownMenu,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropDownMenu();

  return (
    <div>
      <nav className='sidebar-menu-btn-wrapper top-[60px]'>
        <TriggerDropDownMenuBtn
          className='relative'
          onClick={handleDropDownMenu}
        >
          <span className='material-symbols-outlined sidebar-icon-menu absolute -top-[2px] md:static md:top-0'>
            menu
          </span>
        </TriggerDropDownMenuBtn>
        <DropDownMenu
          className='tool-tip-wrapper
              w-[120px]
              border-[1px]
              top-[30px]
              sm:top-[30px]
              sm:right-0
              left-0'
          isClicked={isClicked}
          isShow={isShow}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <InduceWithdrawalBtn onClick={handleMoveToRemoveMember} />
        </DropDownMenu>
      </nav>
    </div>
  );
};
