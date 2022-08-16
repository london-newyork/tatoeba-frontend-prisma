import { useRouter } from 'next/router';

import React, { VFC } from 'react';
import { useRecoilState } from 'recoil';
import { useHandleMoveToResult } from '../hooks/handleMoveToResult';
import { CardProps, Words } from '../types/types';
import { UserNameAtom } from '../utils/atoms/UserNameAtom';
import { WordsAtom } from '../utils/atoms/WordsAtom';
import Image from 'next/image';

export const CardChild: VFC = () => {
  const [words, setWords] = useRecoilState<Words[]>(WordsAtom);
  const router = useRouter();

  const RandomColors = [
    'hover:shadow-plane_2xl_card_prime',
    'hover:shadow-plane_2xl_card_second',
    'hover:shadow-plane_2xl_card_third',
    'hover:shadow-plane_2xl_card',
  ];

  const colors = RandomColors[Math.floor(Math.random() * RandomColors.length)];
  const shadowColor = colors.toString();
  const { handleMoveToResult } = useHandleMoveToResult();
  const userName = useRecoilState(UserNameAtom);
  return (
    <>
      {words
        ? words.map((item: Words) => (
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
                    <Image
                      src='/images/women3.jpg'
                      alt='ユーザーの画像'
                      width={24}
                      height={24}
                      className='
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
