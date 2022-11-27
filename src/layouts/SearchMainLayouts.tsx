import React, { VFC } from 'react';
import { Footer } from '../commons/components/footer/Footer';
import { Layouts } from '../types/types';

export const SearchMainLayouts: VFC<Layouts> = (props) => {
  return (
    <div>
      <main
        className="
      mx-auto
      px-7
      pb-40
      pt-20
      sm:pt-[80px]
      md:px-24
      md:pt-[100px]"
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
