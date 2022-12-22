import React from 'react';
import { Header } from '@Components/header/Header';
import { DashboardLayouts } from '@Layouts/dashBoard/DashBoardLayouts';
import { ProfileLayouts } from '@Layouts/dashBoard/ProfileLayouts';

import { Profile } from '@Components/dashboard/Profile';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <div>
      <Head>{/*  */}</Head>
      <div>
        <Header />
        <DashboardLayouts>
          <ProfileLayouts>
            <Profile />
          </ProfileLayouts>
        </DashboardLayouts>
      </div>
    </div>
  );
};

export default Dashboard;
