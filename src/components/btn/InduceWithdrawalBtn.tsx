import React from "react";

type WithdrawalBtnProps = {
  onClick: () => void;
};

export const InduceWithdrawalBtn = ({ onClick }: WithdrawalBtnProps) => {
  return (
    <div>
      <button className="induce-withdrawal-btn-content" onClick={onClick}>
        退会する
      </button>
    </div>
  );
};
