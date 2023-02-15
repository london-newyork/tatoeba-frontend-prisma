import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';

import { TatoeListCreatedAt } from './TatoeListCreatedAt';
import { TatoeListTitle } from './TatoeListTitle';
import { useAccessToken } from '@Features/auth/store';
import { useAuth } from '@Features/auth/hooks/useAuth';
import { useUserInfo } from '@Features/user/hooks/useUserInfo';
import { Tatoe } from '@Types/types';
import { TatoeAtom } from '@Utils/atoms/TatoeAtom';
import { TatoeListDeleteTatoeBtn } from '../btn/TatoeListDeleteTatoeBtn';
import { TatoeListCountFollowerBtn } from '../btn/TatoeListCountFollowerBtn';
import { TatoeListEditExistingTatoeBtn } from '../btn/TatoeListEditExistingTatoeBtn';
import { useTatoe } from '@Features/tatoe/hooks/useTatoe';
import { useRouting } from '@Features/commons/hooks/useRouting';

export const TatoeList = (): JSX.Element => {
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  const accessToken = useAccessToken();
  const router = useRouter();
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  useEffect(() => {
    const getUserTatoeList = async () => {
      await getTatoe();
    };
    getUserTatoeList();
  }, []);

  const { getTatoe } = useTatoe({
    userId,
    tatoe,
    router,
    user,
    setTatoe,
    accessToken,
    tId: null,
    title: null,
    shortParaphrase: null,
    description: null,
    createdAt: null,
    updatedAt: null
  });
  const { handleMoveToEdit } = useRouting();

  if (!userId) {
    return null;
  }

  return (
    <>
      {tatoe.length
        ? tatoe.map((item) => {
            return (
              <ul
                className="
                tatoe-list-wrapper
                group
                "
                key={item.tId as string}
              >
                <li className="grow">
                  <ul
                    className="
                    tatoe-list-items-wrapper
                    md:gap-1
                    lg:gap-3
                    "
                  >
                    <TatoeListCreatedAt createdAt={item.createdAt} />
                    <li className="grow">
                      <ul
                        className="
                        tatoe-list-item
                        "
                      >
                        <TatoeListTitle title={item.title} shortParaphrase={item.shortParaphrase} />
                        <li className="tatoe-list-btn-group">
                          <TatoeListEditExistingTatoeBtn
                            onClick={() => handleMoveToEdit({ tId: item.tId })}
                            // tId={item.tId}
                            // title={item.title}
                            // shortParaphrase={item.shortParaphrase}
                            // description={item.description}
                            // imageId={item.imageId}
                            // imageUrl={item.imageUrl}
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
    </>
  );
};
