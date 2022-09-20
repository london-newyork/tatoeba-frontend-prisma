import React, { VFC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHandleMoveToResult } from '../hooks/handleMoveToResult';
import { Tatoe } from '../types/types';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';
import Image from 'next/image';
import { useAuth } from '../hooks/useAuth';
import { useUserInfo } from '../hooks/useUserInfo';
import { ProfileImageAtom } from '../utils/atoms/ProfileImageAtom';

export const CardChild: VFC = () => {
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  const RandomColors = [
    'hover:shadow-plane_2xl_card_prime',
    'hover:shadow-plane_2xl_card_second',
    'hover:shadow-plane_2xl_card_third',
    'hover:shadow-plane_2xl_card',
  ];

  const colors = RandomColors[Math.floor(Math.random() * RandomColors.length)];
  const shadowColor = colors.toString();
  const { handleMoveToResult } = useHandleMoveToResult();

  const { userId } = useAuth();
  const profileImage = useRecoilValue(ProfileImageAtom);

  console.log('CardChild profileImage', profileImage);
  console.log('CardChild userId', userId);

  const { user } = useUserInfo(userId);

  if (!userId || !user) {
    return null;
  }
  const userName = user.userName;

  return (
    <>
      {tatoe
        ? tatoe.map((item: Tatoe) => (
            <li
              key={item.tId}
              className={`
                    px-4
                    pt-4
                    h-[312px]
                    w-[280px]
                    rounded-2xl
                    shadow-plane_2xl_card
                    ${shadowColor}
                    border-[1px]
                    border-gray-800
                    bg-white
                    `}
              onClick={() =>
                handleMoveToResult({
                  tId: item.tId,
                  title: item.title,
                  shortParaphrase: item.shortParaphrase,
                  description: item.description,
                })
              }
            >
              <ul
                className='
                        h-[72px]
                        pl-1
                        '
              >
                <li>
                  <ul
                    className='
                    flex
                    items-center
                    gap-x-2
                    pb-2
                    '
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
                      alt='ユーザーの画像'
                      className='
                      w-6
                      h-6
                      rounded-full
                      object-cover'
                    />
                    <p
                      className='
                    text-xs
                    text-gray-400
                    '
                    >
                      {userName}が投稿
                    </p>
                  </ul>
                  <h3
                    className='
                                text-left
                                text-dark_green
                                text-lg
                                '
                  >
                    {item.title}
                    <br />
                    <span className='text-gray-500'>を例えると...</span>
                    {item.shortParaphrase}
                  </h3>
                </li>
              </ul>
              <ul
                className='
                        pt-5
                        '
              >
                <li
                  className='
                            flex
                            flex-col
                            items-center
                            pt-6
                            '
                >
                  <Image
                    src='/images/illust1.png'
                    alt='illust of Tatoeba app'
                    width={240}
                    height={120}
                    objectFit='contain'
                    quality={50}
                    priority={true}
                  />
                </li>
              </ul>
            </li>
          ))
        : undefined}
    </>
  );
};
