import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

export const DashBoardMenuBtn = () => {
  const router = useRouter();
  const handleMoveToRemoveMember = () => {
    router.push({
      pathname: '/DashBoard/RemoveMember',
    });
  };
  const [isHover, setIsHover] = useState(true);
  const handleToolTip = useCallback(() => {
    setIsHover(!isHover);
  }, [isHover]);

  return (
    <div>
      <nav
        className='
        fixed
        text-2xl
        text-white
        sm:left-5
        left-5
        top-[60px]
        rounded-lg
        flex
        '
      >
        <button
          className='
            position
            relative
            '
          onClick={handleToolTip}
        >
          <span className='material-symbols-outlined sidebar-icon-menu absolute -top-[2px] md:static md:top-0'>
            menu
          </span>
        </button>
        <ul
          className={`
                absolute
                z-40
                left-0
                top-12
                w-48
                bg-white
                text-gray-700
                flex-col
                rounded-xl
                border
                border-gray-700
                ${isHover ? 'hidden' : 'flex'}
                `}
        >
          <li
            className='
                    text-sm
                    mx-auto
                    cursor-pointer
                    py-6
                    text-center
                    hover:bg-gray-100
                    hover:w-full
                    hover:rounded-xl
                    '
            onClick={handleMoveToRemoveMember}
          >
            退会する
          </li>
        </ul>
      </nav>
    </div>
  );
};
