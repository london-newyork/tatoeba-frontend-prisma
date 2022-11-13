import React from 'react';

type WithdrawalBtnProps = {
  isHover: boolean;
  onClick: () => void;
};

export const WithdrawalBtn = ({ isHover, onClick }: WithdrawalBtnProps) => {
  return (
    <div>
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
          onClick={onClick}
        >
          退会する
        </li>
      </ul>
    </div>
  );
};
