import Link from 'next/link';
import React from 'react';

type RegisterAuthInfoBtnProps = {
  href: string;
  title: string;
};

export const RegisterAuthInfoBtn = ({ href, title }: RegisterAuthInfoBtnProps) => {
  return (
    <Link
      href={href}
      passHref={true}
      className="
      mx-auto
      text-xs
      text-gray-600
      cursor-pointer"
    >
      {title}
    </Link>
  );
};
