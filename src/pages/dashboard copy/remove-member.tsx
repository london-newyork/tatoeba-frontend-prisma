import { DashboardLayouts } from '@Layouts/dashBoard/DashBoardLayouts';
import React from 'react';
import { Header } from '@Components/header/Header';
import { RemoveMemberLayouts } from '@Layouts/dashBoard/RemoveMemberLayouts';

const RemoveMember = () => {
  return (
    <div>
      <Header />
      <DashboardLayouts>
        <RemoveMemberLayouts>
          <h1 className="text-3xl tracking-widest text-gray-700">退会</h1>
          <p className="mt-10 text-sm leading-loose text-gray-700">
            ご利用いただきありがとうございました。
            <br />
          </p>
          <button
            className="
                    mt-10
                    h-10
                    w-40
                    rounded-md
                    bg-red-400
                    text-white"
          >
            退会する
          </button>
        </RemoveMemberLayouts>
      </DashboardLayouts>
    </div>
  );
};

export default RemoveMember;
