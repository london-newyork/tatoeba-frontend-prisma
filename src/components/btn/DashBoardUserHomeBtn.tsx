import { useRouter } from 'next/router';
import React, { VFC } from 'react';

export const DashBoardUserHomeBtn: VFC = (props) => {
  const router = useRouter();
  const handleMoveToDashBoardHome = () => {
    router.push({
      pathname: '/dashboard',
    });
  };
  return (
    <button className='cursor-pointer' onClick={handleMoveToDashBoardHome}>
      <span className='material-symbols-outlined sidebar-icon'>home</span>
    </button>
  );
};
