import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useApi } from '../../hooks/useApi';
import { useAuth } from '@Features/auth/hooks/useAuth';

import { useUserInfo } from '@Features/user/hooks/useUserInfo';

import { Tatoe } from '@Types/types';

import { TatoeAtom } from '@Utils/atoms/TatoeAtom';

import { SVGIcons } from '../SVGIcons';
import { useAccessToken } from '@Features/auth/store';
import { useTatoe } from '@Features/tatoe/hooks/useTatoe';

export const TatoeListDeleteTatoeBtn = (props: Pick<Tatoe, 'tId'>) => {
  const { tId } = props;
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);
  // const persistAccessToken = useRecoilValue(LoginUserAtom);
  const accessToken = useAccessToken();
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  const router = useRouter();
  const { deleteTatoe } = useTatoe({
    tId,
    tatoe,
    router,
    user,
    setTatoe,
    /* persistAccessToken */
    accessToken
  });
  const { api: deleteTatoeImageApi } = useApi(`/tatoe/${tId}/explanation_image`, { method: 'DELETE' });
  const handleOnClickDeleteTatoeBtn = async () => {
    await deleteTatoeImageApi();
    await deleteTatoe({ tId });
  };

  return (
    <ul>
      <li className="flex items-center">
        <button onClick={handleOnClickDeleteTatoeBtn}>
          <SVGIcons
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeWidth={0.9}
            className="tatoe-list-icon"
            name="tatoe-list-delete"
          />
        </button>
      </li>
    </ul>
  );
};
