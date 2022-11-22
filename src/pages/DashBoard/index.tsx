import React from 'react';
import { Header } from '../../features/header/components/Header';
import { DashboardLayouts } from '../../layouts/dashBoard/DashboardLayouts';
import { ProfileLayouts } from '../../layouts/dashBoard/ProfileLayouts';

import { Profile } from '../../features/dashboard/components/profile/Profile';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <div>
      <Head>//</Head>
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
