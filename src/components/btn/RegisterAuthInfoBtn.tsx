import Link from 'next/link';
import React from 'react';

type RegisterAuthInfoBtnProps = {
  href: string;
  title: string;
};

export const RegisterAuthInfoBtn = ({
  href,
  title,
}: RegisterAuthInfoBtnProps) => {
  return (
    <Link href={href}>
      <a
        className='
        mx-auto
        text-sm
        text-gray-600
        cursor-pointer'
      >
        {title}
      </a>
    </Link>
  );
};
