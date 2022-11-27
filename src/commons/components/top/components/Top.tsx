import React, { VFC } from 'react';

import { TopUpperContents } from './TopUpperContents';

import { CardLayouts } from '../../../../layouts/CardLayouts';
import { CardChild } from './card-child/CardChild';

export const Top: VFC = () => {
  return (
    <>
      <TopUpperContents />
      <CardLayouts>
        <CardChild />
      </CardLayouts>
    </>
  );
};
