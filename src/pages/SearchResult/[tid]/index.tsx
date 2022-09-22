import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Header } from '../../../components/Header/Header';
import { SearchMainLayouts } from '../../../components/Layouts/SearchMainLayouts';
import { useRecoilValue } from 'recoil';

import { ProfileImageAtom } from '../../../components/utils/atoms/ProfileImageAtom';
import { useApi } from '../../../components/hooks/useApi';

const SearchResult = () => {
  const router = useRouter();
  const profileImage = useRecoilValue(ProfileImageAtom);
  const { title, shortParaphrase, description, userId } = router.query;

  const [tatoe, setTatoe] = useState();
  const { api: getTatoeApi } = useApi(`/tatoe/${router.query.tId}`, {
    method: 'GET',
  });

  useEffect(() => {
    if (!router.query.tId) return;
    const main = async () => {
      const { data: tatoe } = await getTatoeApi();
      setTatoe(tatoe);
    };
    main();
  }, [router.query.tId]);

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
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
                alt='ユーザーの画像'
                className='
                w-6
                h-6
                rounded-full
                object-cover'
              />
              {/* <small className='text-gray-400'>{user.userName}が投稿</small> */}
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
