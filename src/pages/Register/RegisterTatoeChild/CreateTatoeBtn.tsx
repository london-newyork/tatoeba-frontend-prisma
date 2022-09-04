import { useRouter } from 'next/router';
import { useTatoe } from '../../../components/hooks/useTatoe';
import { Tatoe, TatoeBtnProps } from '../../../components/types/types';

export const CreateTatoeBtn = (props: TatoeBtnProps) => {
  const { tatoe, query_tId, onClick } = props;

  const router = useRouter();

  const submitTatoe = async () => {
    onClick();

    tatoe.map((item: Tatoe) => {
      if (item.tId === query_tId) {
        router.push({
          pathname: '/DashBoard/UserTatoeList',
        });
      }
    });
  };

  return (
    <div className='flex justify-end'>
      <button
        onClick={submitTatoe}
        className='
        p-3
        w-[200px]
        rounded-full
        bg-dark_green
        text-gray-800
        text-lg
        hover:bg-opacity-90
      '
      >
        投稿する
      </button>
    </div>
  );
};
