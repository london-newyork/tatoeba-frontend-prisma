import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Tatoe } from '../../../src/components/types/types';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';
import { TatoeListDeleteTatoeBtn } from '../btn/TatoeListDeleteTatoeBtn';
import { TatoeListEditExistingTatoeBtn } from '../btn/TatoeListEditExistingTatoeBtn';
import { useAuth } from '../hooks/useAuth';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { TatoeListCountFollowerBtn } from '../btn/TatoeListCountFollowerBtn';

export const TatoeList = (props: any): JSX.Element => {
  const { userId } = useAuth();
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  if (!userId) {
    return null;
  }

  // userのtatoeをAPIからGET
  useEffect(() => {
    const getUserTatoeList = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/tatoe`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${persistAccessToken}`,
          },
        }
      );
      const { data } = await res.json();
      getUserTatoeList();
      if (!data) {
        throw Error('データがありません');
      }
    };
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
                                text-xs
                                w-[124px]'
                    >
                      {item.creationTime}
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
