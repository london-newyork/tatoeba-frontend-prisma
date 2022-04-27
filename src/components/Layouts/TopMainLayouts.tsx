import React from 'react';

type Props = {
    children: any
}

export const TopMainLayouts = (props:Props) => {
const { children } = props
  return (
    <main className="
        md:pt-[100px]
        sm:pt-[80px]
        bg-white
        ">
        {children}
    </main>
  )
};
