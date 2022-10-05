import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Header } from '../../../components/Header/Header';
import { SearchMainLayouts } from '../../../components/Layouts/SearchMainLayouts';
import { useRecoilValue } from 'recoil';

import { ProfileImageAtom } from '../../../components/utils/atoms/ProfileImageAtom';
import { useGetUserTatoeApi } from '../../../components/hooks/useGetUserTatoeApi';
import { AllUserTatoe } from '../../../components/types/types';

const SearchResult = () => {
  const router = useRouter();
  const profileImage = useRecoilValue(ProfileImageAtom);
  const { tId } = router.query;

  const { getAllUserTatoe, allUserTatoe } = useGetUserTatoeApi();

  useEffect(() => {
    if (!tId) return;
    const main = async () => {
      await getAllUserTatoe();
    };
    main();
  }, [tId]);

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 検索結果</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <SearchMainLayouts>
        {allUserTatoe.map((item: AllUserTatoe) => {
          return item.tId === tId ? (
            <div key={item.tId}>
              <div className='flex flex-col'>
                <div className='flex items-center gap-x-2'>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${item.userId}/profile_image?t=${profileImage}`}
                    alt='ユーザーの画像'
                    className='
                w-6
                h-6
                rounded-full
                object-cover'
                  />
                  <small className='text-gray-400'>{item.userName}が投稿</small>
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
                    {item.title}
                    をわかりやすく例えると...
                  </h1>
                </div>
              </div>
              <h2 className='pt-16 text-2xl text-gray-600'>
                {item.shortParaphrase}
              </h2>
              <p
                className='
            pt-10
            text-md
            leading-loose
            text-gray-600'
              >
                {item.description}
              </p>
              <div className='max-w-[600px] h-96 bg-gray-300 mx-auto'>
                <img />
              </div>
            </div>
          ) : null;
        })}
      </SearchMainLayouts>
    </>
  );
};

export default SearchResult;
