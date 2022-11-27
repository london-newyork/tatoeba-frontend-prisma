import Link from 'next/link';
import React from 'react';

export const Logo = () => {
  return (
    <div className="my-auto">
      <Link
        href="/"
        className="
            text-2xl
            text-gray-700
            tracking-wider
            hover:opacity-50
            duration-300"
      >
        <span className="text-dark_green">T</span>atoeba
      </Link>
    </div>
  );
};
