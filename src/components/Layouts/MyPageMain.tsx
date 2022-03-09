import React from 'react';

type Props = {
    children: any
}

export const MyPageMain = (props:Props) => {
const { children } = props
  return (
    <main
    className="
    md:pt-[100px]
    sm:pt-[80px]
    bg-gray-100
    h-screen
    px-7
    md:px-18
    mx-auto
    pt-9">
      <div
      className='
      md:pt-[100px]
      sm:pt-[80px]
      lg:px-12
      px-7
      pt-8
      pb-10
      rounded-md
      bg-white
      mx-auto
      max-w-[1000px]
      '
      >
      {children}
      </div>
    </main>
  )
};
