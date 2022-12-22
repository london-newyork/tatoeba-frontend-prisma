import React, { VFC } from 'react';
import { Layouts } from '@Types/types';

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
                card-contents
               lg:w-[940px]"
          >
            {props.children}
          </div>
        </div>
      </section>
    </div>
  );
};
