import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useApi } from '../../commons/hooks/useApi';
import { useAuth } from '../auth/hooks/useAuth';
import { useTatoe } from '../dashboard/hooks/useTatoe';
import { useUserInfo } from '../auth/hooks/useUserInfo';
import { SVGIcons } from '../../commons/components/SVGIcons';
import { Tatoe } from '../../types/types';
import { LoginUserAtom } from '../../utils/atoms/LoginUserAtom';
import { TatoeAtom } from '../../utils/atoms/TatoeAtom';

export const TatoeListDeleteTatoeBtn = (props: Tatoe) => {
  const { tId } = props;
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  const router = useRouter();

  const { deleteTatoe } = useTatoe({
    tId,
    tatoe,
    router,
    user,
    setTatoe,
    persistAccessToken
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
