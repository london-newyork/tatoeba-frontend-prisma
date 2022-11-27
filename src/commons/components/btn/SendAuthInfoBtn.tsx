import React from 'react';

type SendAuthInfoBtnProps = {
  onClick: () => Promise<void>;
  text: string;
};

export const SendAuthInfoBtn = ({ onClick, text }: SendAuthInfoBtnProps) => {
  return (
    <button
      className="
            login-btn
            my-4
            "
      onClick={onClick}
    >
      {text}
    </button>
  );
};
