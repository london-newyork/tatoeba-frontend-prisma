import React from 'react';

type Props = {
    children: any
}

export const SearchMain = (props:Props) => {
const { children } = props
  return (
    <main
    className="
    h-screen
    px-7
    md:px-24
    mx-auto
    pt-9">
    {children}
    </main>
  )
};
