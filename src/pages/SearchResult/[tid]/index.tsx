import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Header } from '../../../components/Header/Header';
import { SearchMainLayouts } from '../../../components/Layouts/SearchMainLayouts';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserNameAtom } from '../../../components/utils/atoms/UserNameAtom';
import Image from 'next/image';
import { useUserInfo } from '../../../components/hooks/useUserInfo';
import { useAuth } from '../../../components/hooks/useAuth';
import { ProfileImageAtom } from '../../../components/utils/atoms/ProfileImageAtom';

const SearchResult = () => {
  const router = useRouter();
  const profileImage = useRecoilValue(ProfileImageAtom);
  const { title, shortParaphrase, description } = router.query;
  // const userName = useRecoilState(UserNameAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  if (!userId || !user) {
    return null;
  }

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
              <small className='text-gray-400'>{user.userName}が投稿</small>
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
