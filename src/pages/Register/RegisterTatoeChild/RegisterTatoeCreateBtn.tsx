import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TatoeAtom } from '../../../components/utils/atoms/TatoeAtom';
import { useUserInfo } from '../../../components/hooks/useUserInfo';
import { useAuth } from '../../../components/hooks/useAuth';
import { Tatoe } from '../../../components/types/types';
import { LoginUserAtom } from '../../../components/utils/atoms/LoginUserAtom';

export const RegisterTatoeCreateBtn = (props: Tatoe) => {
  const { query_tId, title, shortParaphrase, description, creationTime } =
    props;
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  //
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  const router = useRouter();

  function getUniqueId() {
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
  }
  const tId = getUniqueId();

  // TODO ユーザーが title, description, shortParaphrase 入力したら async await して API にデータを送る
  const submitTatoe = async (): Promise<string> => {
    if (!userId || !user) {
      return null;
    }
    if (title === '' || shortParaphrase === '' || description === '') {
      alert('入力されていない箇所があります。');
      return;
    }

    if (user.userName === '') {
      alert('ユーザー名を登録して投稿してください。');
      return;
    }

    // // 初回登録
    if (!query_tId) {
      // API通信
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistAccessToken}`,
        },
        body: JSON.stringify({ title, shortParaphrase, description }),
      });
      const { data: newTatoe } = await res.json();

      const firstAddTatoe = [newTatoe, ...tatoe];
      setTatoe(firstAddTatoe);

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }
    // 更新時
    if (query_tId) {
      const newTatoe = tatoe.map((item: Tatoe) => {
        if (item.tId === query_tId) {
          return {
            tId: item.tId,
            title,
            shortParaphrase,
            description,
            creationTime,
          };
        } else {
          return item;
        }
      });
      setTatoe(newTatoe);
      // API通信

      tatoe.map((item: Tatoe) => {
        if (item.tId === query_tId) {
          router.push({
            pathname: '/DashBoard/UserTatoeList',
          });
        }
      });
    }
  };

  return (
    <div className='flex justify-end'>
      <button
        onClick={submitTatoe}
        // onClick={props.onClick}
        // type='submit'
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
        {/* {props.children} */}
      </button>
    </div>
  );
};
