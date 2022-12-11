import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAuth } from '@Features/auth/hooks/useAuth';
import { useUserInfo } from '@Features/user/hooks/useUserInfo';
import { useTatoe } from '../../../features/dashboard/hooks/useTatoe';
import { Tatoe } from '../../../types/types';
// import { LoginUserAtom } from '../../../utils/atoms/LoginUserAtom';
import { TatoeAtom } from '../../../utils/atoms/TatoeAtom';
import { TatoeListCountFollowerBtn } from '../btn/TatoeListCountFollowerBtn';
import { TatoeListDeleteTatoeBtn } from '../btn/TatoeListDeleteTatoeBtn';
import { TatoeListEditExistingTatoeBtn } from '../btn/TatoeListEditExistingTatoeBtn';
import { TatoeListCreatedAt } from './TatoeListCreatedAt';
import { TatoeListTitle } from './TatoeListTitle';
import { useAccessToken } from '@Features/auth/store';

export const TatoeList = (): JSX.Element => {
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  // const persistAccessToken = useRecoilValue(LoginUserAtom);
  const accessToken = useAccessToken();
  const router = useRouter();
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  if (!userId) {
    return null;
  }
  const { getTatoe } = useTatoe({
    userId,
    tatoe,
    router,
    user,
    setTatoe,
    /* persistAccessToken */
    accessToken
  });

  useEffect(() => {
    const getUserTatoeList = async () => {
      await getTatoe();
    };
    getUserTatoeList();
  }, []);

  return (
    <div>
      {tatoe.length
        ? tatoe.map((item) => {
            return (
              <ul
                className="
                group
                tatoe-list-wrapper
                "
                key={item.tId as string}
              >
                <li className="flex-grow">
                  <ul
                    className="
                    lg:gap-3
                    md:gap-1
                    tatoe-list-items-wrapper
                    "
                  >
                    <TatoeListCreatedAt createdAt={item.createdAt} />
                    <li className="flex-grow">
                      <ul
                        className="
                        tatoe-list-item
                        "
                      >
                        <TatoeListTitle title={item.title} shortParaphrase={item.shortParaphrase} />
                        <li className="tatoe-list-btn-group">
                          <TatoeListEditExistingTatoeBtn
                            tId={item.tId}
                            title={item.title}
                            shortParaphrase={item.shortParaphrase}
                            description={item.description}
                            imageId={item.imageId}
                            imageUrl={item.imageUrl}
                          />
                          <TatoeListDeleteTatoeBtn tId={item.tId} />
                          <TatoeListCountFollowerBtn />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            );
          })
        : null}
    </div>
  );
};
