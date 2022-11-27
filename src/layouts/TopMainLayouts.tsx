import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const TopMainLayouts: VFC<Layouts> = (props) => {
  return (
    <main
      className="
        bg-white
        pt-[100px]
        "
    >
      {props.children}
    </main>
  );
};
