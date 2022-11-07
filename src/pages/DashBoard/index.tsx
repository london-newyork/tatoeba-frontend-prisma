import React from 'react';
import { Header } from '../../components/Header/Header';
import { DashBoardLayouts } from '../../components/Layouts/DashBoard/DashBoardLayouts';
import { ProfileLayouts } from '../../components/Layouts/DashBoard/ProfileLayouts';

import { Profile } from '../../components/DashBoard/Profile';
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
