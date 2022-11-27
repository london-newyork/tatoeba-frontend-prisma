import { useRouter } from 'next/router';
import React, { VFC } from 'react';
import { SVGIcons } from '../components/SVGIcons';

export const DashboardUserHomeBtn: VFC = (props) => {
  const router = useRouter();
  const handleMoveToDashboardHome = () => {
    router.push({
      pathname: '/dashboard'
    });
  };
  return (
    <button className="sidebar-icon-btn" onClick={handleMoveToDashboardHome}>
      <SVGIcons
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        strokeWidth={0.9}
        className="sidebar-icon"
        name="user-home"
      />
    </button>
  );
};
