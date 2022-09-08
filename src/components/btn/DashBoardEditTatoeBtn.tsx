import { useRouter } from 'next/router';

export const DashBoardEditTatoeBtn = () => {
  const router = useRouter();
  const handleMoveToUserTatoeList = () => {
    router.push({
      pathname: '/DashBoard/UserTatoeList',
    });
  };
  return (
    <button
      className='
      cursor-pointer
    '
      onClick={handleMoveToUserTatoeList}
    >
      <span className='material-symbols-outlined sidebar-icon'>
        format_list_bulleted
      </span>
    </button>
  );
};
