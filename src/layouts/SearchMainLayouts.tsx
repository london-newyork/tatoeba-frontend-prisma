import React, { VFC } from 'react';
import { Footer } from '../features/footer/components/Footer';
import { Layouts } from '../types/types';

export const SearchMainLayouts: VFC<Layouts> = (props) => {
  return (
    <div>
      <main
        className="
      md:pt-[100px]
      sm:pt-[80px]
      px-7
      md:px-24
      mx-auto
      pb-40
      pt-20"
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
