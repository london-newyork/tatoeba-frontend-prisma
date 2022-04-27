import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const LoginLayouts:VFC<Layouts> = (props) => {
const { children } = props
  return (
    <main
    className="
    sm:pt-[100px]
    bg-gray-100
    h-screen
    px-7
    md:px-18
    mx-auto
    pt-9">
      {children}
    </main>
  )
};
