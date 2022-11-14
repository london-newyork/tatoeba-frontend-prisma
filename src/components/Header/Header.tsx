import React from 'react';

import { HeaderEditBtn } from '../btn/HeaderEditBtn';
import { Logo } from './Logo';
import { HeaderTooltip } from './HeaderTooltip';

export const Header = () => {
  return (
    <header>
      <div className='header-wrapper h-[48px]'>
        <Logo />
        <div
          className='
          header-controller
          right-[14.5px]
          top-[8px]
          '
        >
          <HeaderTooltip />
          <HeaderEditBtn />
        </div>
      </div>
    </header>
  );
};
