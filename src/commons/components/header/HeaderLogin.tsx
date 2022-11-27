import React from 'react';
import Link from 'next/link';
import { Auth } from '../auth/hooks/useAuth';

export const HeaderLogin = ({ isLoggedIn }: Pick<Auth, 'isLoggedIn'>) => {
  return (
    <div className="py-2 text-sm text-gray-500 hover:w-full hover:bg-gray-100">
      {isLoggedIn ? <Link href="/dashboard">ログイン</Link> : <Link href="/login">ログイン</Link>}
    </div>
  );
};
