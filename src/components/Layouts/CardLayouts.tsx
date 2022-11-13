import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const CardLayouts: VFC<Layouts> = (props) => {
  return (
    <div>
      <section>
        <div
          id='tatoeba-card'
          className='
            flex
            justify-center
            bg-gray-200
            dark:bg-black
            px-6
            sm:px-6
            md:px-11
            lg:px-24
            py-10
            sm:py-8
            md:py-10
            lg:py-10
            '
        >
          <ul
            className='
                lg:w-[940px]
                flex
                sm:flex-row
                flex-col
                lg:justify-start
                sm:justify-center
                flex-wrap
                gap-x-8
                gap-y-8
                mt-4'
          >
            {props.children}
          </ul>
        </div>
      </section>
    </div>
  );
};
