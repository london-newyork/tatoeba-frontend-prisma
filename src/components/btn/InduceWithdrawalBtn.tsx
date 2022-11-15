import React from 'react';

type WithdrawalBtnProps = {
  isHover: boolean;
  onClick: () => void;
};

export const InduceWithdrawalBtn = ({
  isHover,
  onClick,
}: WithdrawalBtnProps) => {
  return (
    <div>
      <ul
        className={`
        induce-withdrawal-btn-wrapper
          ${isHover ? 'hidden' : 'flex'}
          `}
      >
        <li className='induce-withdrawal-btn-content' onClick={onClick}>
          退会する
        </li>
      </ul>
    </div>
  );
};
