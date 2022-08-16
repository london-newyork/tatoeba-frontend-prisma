import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Header } from '../../../src/components/Header/Header';
import { SearchMainLayouts } from '../../../src/components/Layouts/SearchMainLayouts';
import { useRecoilState } from 'recoil';
import { UserNameAtom } from '../../../src/components/utils/atoms/UserNameAtom';
import Image from 'next/image';

const SearchResult = () => {
  const router = useRouter();
  const { title, shortParaphrase, description } = router.query;
  const userName = useRecoilState(UserNameAtom);

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 検索結果</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <SearchMainLayouts>
        <div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-x-2'>
              <Image
                src='/images/women3.jpg'
                alt='ユーザーの画像'
                width={24}
                height={24}
                className='
                          rounded-full
                          object-cover'
              />
              <small className='text-gray-400'>{userName}が投稿</small>
            </div>
            <div
              className='
               flex
               relative
               '
            >
              <h1
                className='
                  text-4xl
                  text-gray-700
                  pt-6
                  '
              >
                {title}
                をわかりやすく例えると...
              </h1>
            </div>
          </div>
          <h2 className='pt-16 text-2xl text-gray-600'>{shortParaphrase}</h2>
          <p
            className='
            pt-10
            text-md
            leading-loose
            text-gray-600'
          >
            {description}
          </p>
          <div className='max-w-[600px] h-96 bg-gray-300 mx-auto'>
            <img />
          </div>
        </div>
      </SearchMainLayouts>
    </>
  );
};

export default SearchResult;
