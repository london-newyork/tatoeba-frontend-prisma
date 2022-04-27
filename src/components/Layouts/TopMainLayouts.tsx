import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const TopMainLayouts:VFC<Layouts> = (props) => {
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
