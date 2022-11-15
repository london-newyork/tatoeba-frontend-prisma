import React from 'react';

type LoginBtnProps = {
  onClick: () => Promise<void>;
  text: string;
};

export const LoginBtn = ({ onClick, text }: LoginBtnProps) => {
  return (
    <button
      className='
            mt-4
            mb-4
            login-btn
            '
      onClick={onClick}
    >
      {text}
    </button>
  );
};
