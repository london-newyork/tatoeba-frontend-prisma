import { useRouter } from 'next/router';
import { SVGIcons } from '../../commons/components/SVGIcons';

export const DashBoardEditTatoeBtn = () => {
  const router = useRouter();
  const handleMoveToUserTatoeList = () => {
    router.push({
      pathname: '/dashboard/user-tatoe-list'
    });
  };
  return (
    <button
      className="
      sidebar-icon-btn
      text-white
    "
      onClick={handleMoveToUserTatoeList}
    >
      <SVGIcons
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        strokeWidth={0.9}
        className="sidebar-icon"
        name="sidebar-edit"
      />
    </button>
  );
};
