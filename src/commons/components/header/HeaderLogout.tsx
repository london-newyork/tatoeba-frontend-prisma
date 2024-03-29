import React from 'react';

type LogoutProps = {
  onClick: () => Promise<void>;
};

export const HeaderLogout = ({ onClick }: LogoutProps) => {
  return (
    <div className="py-2 text-sm text-gray-500 hover:w-full hover:bg-gray-100">
      <button onClick={onClick}>ログアウト</button>
    </div>
  );
};
