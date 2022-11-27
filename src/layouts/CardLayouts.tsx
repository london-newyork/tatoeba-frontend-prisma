import React, { VFC } from 'react';
import { Layouts } from '../types/types';

export const CardLayouts: VFC<Layouts> = (props) => {
  return (
    <div>
      <section>
        <div
          id="tatoeba-card"
          className="
          card-wrapper
          "
        >
          <div
            className="
                lg:w-[940px]
               card-contents"
          >
            {props.children}
          </div>
        </div>
      </section>
    </div>
  );
};