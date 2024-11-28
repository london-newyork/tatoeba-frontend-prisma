import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '@Features/auth/hooks/useAuth';
import { EditIconBtn } from './EditIconBtn';

export const HeaderEditBtn = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleOnClickDistributeLink = () => {
    if (isLoggedIn) {
      router.push({
        pathname: '/registers'
      });
    }
    router.push({
      pathname: '/dashboards'
    });
  };

  return (
    <>
      <EditIconBtn onClick={handleOnClickDistributeLink} />
    </>
  );
};
