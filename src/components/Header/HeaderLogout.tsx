import React from 'react';

type LogoutProps = {
  onClick: () => Promise<void>;
};

export const HeaderLogout = ({ onClick }: LogoutProps) => {
  return (
    <li className='py-2 text-sm text-gray-500 hover:bg-gray-100 hover:w-full'>
      <button onClick={onClick}>ログアウト</button>
    </li>
  );
};
