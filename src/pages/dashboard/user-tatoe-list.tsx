import React from "react";
import { TatoeListLayouts } from "../../components/Layouts/DashBoard/TatoeListLayouts";
import { TatoeListWrapper } from "../../components/DashBoard/TatoeListWrapper";
import { TatoeList } from "../../components/DashBoard/TatoeList";
import Head from "next/head";
import { DashBoardLayouts } from "../../components/Layouts/DashBoard/DashBoardLayouts";
import { Header } from "../../components/Header/Header";
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
          <TatoeListWrapper>
            <TatoeList />
          </TatoeListWrapper>
        </TatoeListLayouts>
      </DashBoardLayouts>
    </div>
  );
};

export default UserTatoeList;
