import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Header } from '@Commons/components/header/Header';
import { SearchMainLayouts } from '@Layouts/SearchMainLayouts';

import { useGetUserTatoeApi } from '@Components/top/hooks/useGetUserTatoeApi';
import { AllUserTatoe } from '@Types/types';

import { DetailTatoeTitle } from '@Components/detailpage/DetailTatoeTitle';
import { PostedUser } from '@Components/detailpage/PostedUser';
import { useProfileImage } from '@Features/auth/store';

const SearchResult = () => {
  const router = useRouter();
  const profileImage = useProfileImage();
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
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <SearchMainLayouts>
        {allUserTatoe.map((item: AllUserTatoe) => {
          return item.tId === tId ? (
            <div key={item.tId}>
              <div className="flex flex-col">
                <PostedUser profileImage={profileImage} userId={item.userId} userName={item.userName} />
                <DetailTatoeTitle title={item.title} />
              </div>
              <h2 className="pt-16 text-2xl text-gray-600">{item.shortParaphrase}</h2>
              <p
                className="
                  pt-10
                  text-base
                  leading-loose
                  text-gray-600"
              >
                {item.description}
              </p>
              <div className="mx-auto mt-12">
                {item.imageUrl ? (
                  // eslint-disable-next-line
                  <img src={item.imageUrl} alt="例えの説明画像" className="mx-auto" />
                ) : null}
              </div>
            </div>
          ) : null;
        })}
      </SearchMainLayouts>
    </>
  );
};

export default SearchResult;
