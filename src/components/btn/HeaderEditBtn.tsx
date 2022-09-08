import { PencilAltIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { EditIconBtn } from './EditIconBtn';

export const HeaderEditBtn = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <Link href='/DashBoard/UserTatoeList'>
          <EditIconBtn />
        </Link>
      ) : (
        <Link href='/Login/'>
          <EditIconBtn />
        </Link>
      )}
    </div>
  );
};
