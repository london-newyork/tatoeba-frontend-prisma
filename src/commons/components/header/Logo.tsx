import Link from 'next/link';
import React from 'react';

export const Logo = () => {
  return (
    <div className="my-auto">
      <Link
        href="/"
        className="
            text-2xl
            tracking-wider
            text-gray-700
            duration-300
            hover:opacity-50"
      >
        <span className="text-dark_green">T</span>atoeba
      </Link>
    </div>
  );
};
