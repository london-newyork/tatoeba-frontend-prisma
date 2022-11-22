import React, { VFC } from 'react';

import { TopUpperContents } from './TopUpperContents';

import { CardLayouts } from '../../layouts/CardLayouts';
import { CardChild } from './CardChild/CardChild';

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
