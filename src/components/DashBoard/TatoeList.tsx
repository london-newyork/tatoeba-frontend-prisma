import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Tatoe } from '../../../src/components/types/types';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';
import { TatoeListDeleteTatoeBtn } from '../btn/TatoeListDeleteTatoeBtn';
import { TatoeListEditExistingTatoeBtn } from '../btn/TatoeListEditExistingTatoeBtn';
import { useAuth } from '../hooks/useAuth';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { TatoeListCountFollowerBtn } from '../btn/TatoeListCountFollowerBtn';
import { useTatoe } from '../hooks/useTatoe';
import { useRouter } from 'next/router';
import { useUserInfo } from '../hooks/useUserInfo';

export const TatoeList = (): JSX.Element => {
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const router = useRouter();
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  console.log('@TatoeList tatoe ++', tatoe);
  if (!userId) {
    return null;
  }
  const { getTatoe } = useTatoe({
    userId,
    tatoe,
    router,
    user,
    setTatoe,
    persistAccessToken,
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
                className='
                    flex
                    pt-4
                    items-center
                    gap-y-2
                    sm:gap-y-0
                    flex-row
                    sm:justify-between
                    group
                    '
                key={item.tId}
              >
                <li className='flex-grow'>
                  <ul
                    className={`
                            lg:flex
                            block
                            lg:flex-row
                            md:flex-col
                            sm:flex-col
                            flex-row
                            lg:gap-3
                            md:gap-1
                            items-center
                            flex-start
                            `}
                  >
                    <li
                      className='
                                flex
                                text-gray-400
                                text-xxs
                                w-[124px]'
                    >
                      {item.createdAt}
                    </li>
                    <li className='flex-grow'>
                      <ul
                        className='
                                    w-full
                                    sm:max-w-none
                                    flex
                                    flex-row
                                    justify-between
                                    '
                      >
                        <li
                          className='
                                        pr-4
                                        text-gray-700
                                        sm:min-w-[300px]
                                        sm:w-full
                                        sm:max-w-none
                                        '
                        >
                          {item.title}
                          <span className='text-gray-400'>を例えると</span>
                          {item.shortParaphrase}
                        </li>

                        <li
                          className={`
                                    flex
                                    flex-row
                                    gap-2
                                    items-center
                                    opacity-0
                                    group-hover:opacity-100
                                    `}
                        >
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
