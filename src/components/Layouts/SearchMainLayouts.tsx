import React from 'react';

type Props = {
    children: any
}

export const SearchMainLayouts = (props:Props) => {
const { children } = props
  return (
    <main
    className="
    md:pt-[100px]
    sm:pt-[80px]
    h-screen
    px-7
    md:px-24
    mx-auto
    pt-9">
    {children}
    </main>
  )
};
