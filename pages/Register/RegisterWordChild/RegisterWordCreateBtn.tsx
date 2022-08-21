import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom';
import { useUserInfo } from '../../../src/components/hooks/useUserInfo';
import { useAuth } from '../../../src/components/hooks/useAuth';
import { Words } from '../../../src/components/types/types';

export const RegisterWordCreateBtn = (props: Words) => {
  const { query_tId, title, shortParaphrase, description, creationTime } =
    props;
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  // userId user userName 3つともnullまたはundefinedの可能性になってる

  // Profile.tsx >> userId : string ... nullがない
  // RegisterWordCreateBtn.tsx >> userId : string | null

  console.log(user.userName);

  const [words, setWords] = useRecoilState(WordsAtom);
  const router = useRouter();

  function getUniqueId() {
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
  }
  const tId = getUniqueId();

  const submitWords = () => {
    if (title === '' || shortParaphrase === '' || description === '') {
      alert('入力されていない箇所があります。');
      return;
    }
    if (user === null || typeof user === 'undefined') {
      return;
    }
    if (user.userName === '') {
      alert('ユーザー名を登録して投稿してください。');
      return;
    }

    if (!query_tId) {
      const firstAddWords = [
        {
          tId,
          title,
          shortParaphrase,
          description,
          creationTime,
        },
        ...words,
      ];
      setWords(firstAddWords);

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }

    if (query_tId) {
      const newWords = words.map((item: Words) => {
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
      setWords(newWords);

      words.map((item: Words) => {
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
        onClick={submitWords}
        type='submit'
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
