import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAuth } from '../hooks/useAuth';
import { useTatoe } from '../hooks/useTatoe';
import { useUserInfo } from '../hooks/useUserInfo';
import { Tatoe, TatoeBtnProps } from '../types/types';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';

export const TatoeListDeleteTatoeBtn = (props: Tatoe) => {
  const { tId } = props;
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  const router = useRouter();
  // TODO onClickで上から関数を渡す => 親のTatoeListから tId={item.tId} が渡ってきて、
  // それを用いて例えを削除していくため、不可能
  const { deleteTatoe } = useTatoe({
    tId,
    tatoe,
    router,
    user,
    setTatoe,
    persistAccessToken,
  });

  const handleOnClickDeleteTatoeBtn = async () => {
    await deleteTatoe({ tId });
  };

  return (
    <ul>
      <li className='flex items-center'>
        <button onClick={handleOnClickDeleteTatoeBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};
