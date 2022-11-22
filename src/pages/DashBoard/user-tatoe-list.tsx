import React from 'react';
import { TatoeListLayouts } from '../../layouts/dashBoard/TatoeListLayouts';
import { TatoeListWrapper } from '../../features/dashboard/TatoeListWrapper';
import { TatoeList } from '../../features/dashboard/components/tatoe/TatoeList';
import Head from 'next/head';
import { DashboardLayouts } from '../../layouts/dashBoard/DashboardLayouts';
import { Header } from '../../features/header/components/Header';
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
          {/* <TatoeListWrapper> */}
          <TatoeList />
          {/* </TatoeListWrapper> */}
        </TatoeListLayouts>
      </DashboardLayouts>
    </div>
  );
};

export default UserTatoeList;
