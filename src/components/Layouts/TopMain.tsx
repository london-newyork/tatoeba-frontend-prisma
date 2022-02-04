import React from 'react';

type Props = {
    children: any
}

export const TopMain = (props:Props) => {
const { children } = props
  return (
    <main className="
        px-6
        sm:px-6
        md:px-11
        lg:px-24
        h-screen
        pt-10
        sm:pt-10
        md:pt-12
        lg:pt-16
        bg-white
        ">
        {children}
    </main>
  )
};
