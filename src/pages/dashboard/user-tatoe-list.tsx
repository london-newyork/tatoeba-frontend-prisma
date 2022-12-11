import React from 'react';
import { TatoeListLayouts } from '@Layouts/dashBoard/TatoeListLayouts';
import { TatoeList } from '@Components/tatoe/TatoeList';
import Head from 'next/head';
import { DashboardLayouts } from '@Layouts/dashBoard/DashBoardLayouts';
import { Header } from '@Components/header/Header';
const UserTatoeList = () => {
  return (
    <div>
      <Head>
        <title>User Tatoe List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <DashboardLayouts>
        <TatoeListLayouts>
          <TatoeList />
        </TatoeListLayouts>
      </DashboardLayouts>
    </div>
  );
};

export default UserTatoeList;
