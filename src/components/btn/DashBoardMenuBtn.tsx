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
      pathname: '/dashboard/remove-member'
    });
  };
  const { isClicked, isShow, handleDropDownMenu, handleMouseEnter, handleMouseLeave } = useDropDownMenu();

  return (
    <div>
      <nav className="sidebar-menu-btn-wrapper top-[60px]">
        <TriggerDropDownMenuBtn className="relative" onClick={handleDropDownMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.9}
            stroke="currentColor"
            className="sidebar-icon-size"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </TriggerDropDownMenuBtn>
        <DropDownMenu
          className="drop-down-menu-wrapper
              w-[120px]
              border-[1px]
              top-[30px]
              sm:top-[30px]
              sm:right-0
              left-0"
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
