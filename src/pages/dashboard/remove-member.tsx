import React from 'react';
import { DashboardLayouts } from '../../layouts/dashBoard/DashboardLayouts';
import { Header } from '../../features/header/components/Header';
import { RemoveMemberLayouts } from '../../layouts/dashBoard/RemoveMemberLayouts';

const RemoveMember = () => {
  return (
    <div>
      <Header />
      <DashboardLayouts>
        <RemoveMemberLayouts>
          <h1 className="text-3xl tracking-widest text-gray-700">退会</h1>
          <p className="text-sm leading-loose mt-10 text-gray-700">
            ご利用いただきありがとうございました。
            <br />
          </p>
          <button
            className="
                    h-10
                    w-40
                    bg-red-400
                    rounded-md
                    text-white
                    mt-10"
          >
            退会する
          </button>
        </RemoveMemberLayouts>
      </DashboardLayouts>
    </div>
  );
};

export default RemoveMember;
