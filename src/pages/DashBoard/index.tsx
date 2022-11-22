import React from 'react';
import { Header } from '../../features/header/components/Header';
import { DashBoardLayouts } from '../../layouts/dashBoard/DashBoardLayouts';
import { ProfileLayouts } from '../../layouts/dashBoard/ProfileLayouts';

import { Profile } from '../../features/dashBoard/components/profile/Profile';
import Head from 'next/head';

const DashBoard = () => {
  return (
    <div>
      <Head>//</Head>
      <div>
        <Header />
        <DashBoardLayouts>
          <ProfileLayouts>
            <Profile />
          </ProfileLayouts>
        </DashBoardLayouts>
      </div>
    </div>
  );
};

export default DashBoard;
