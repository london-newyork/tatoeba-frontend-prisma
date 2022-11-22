import React from 'react';
import { TatoeListLayouts } from '../../layouts/dashBoard/TatoeListLayouts';
import { TatoeListWrapper } from '../../features/dashBoard/TatoeListWrapper';
import { TatoeList } from '../../features/dashBoard/components/tatoe/TatoeList';
import Head from 'next/head';
import { DashBoardLayouts } from '../../layouts/dashBoard/DashBoardLayouts';
import { Header } from '../../features/header/components/Header';
const UserTatoeList = () => {
  return (
    <div>
      <Head>
        <title>User Tatoe List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <DashBoardLayouts>
        <TatoeListLayouts>
          {/* <TatoeListWrapper> */}
          <TatoeList />
          {/* </TatoeListWrapper> */}
        </TatoeListLayouts>
      </DashBoardLayouts>
    </div>
  );
};

export default UserTatoeList;
