import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '../auth/hooks/useAuth';
import { EditIconBtn } from './EditIconBtn';

export const HeaderEditBtn = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleOnClickDistributeLink = () => {
    if (isLoggedIn) {
      router.push({
        pathname: '/register'
      });
    }
    router.push({
      pathname: '/dashboard'
    });
  };

  return (
    <>
      <EditIconBtn onClick={handleOnClickDistributeLink} />
    </>
  );
};
