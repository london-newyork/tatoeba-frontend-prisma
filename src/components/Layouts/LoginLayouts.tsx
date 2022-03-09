import React from 'react';

type Props = {
    children: any
}

export const LoginLayouts = (props:Props) => {
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
