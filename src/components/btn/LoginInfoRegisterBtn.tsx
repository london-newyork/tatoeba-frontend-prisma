import Link from 'next/link';
import React from 'react';

type LoginInfoRegisterBtnProps = {
  href: string;
  title: string;
};

export const LoginInfoRegisterBtn = ({
  href,
  title,
}: LoginInfoRegisterBtnProps) => {
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
