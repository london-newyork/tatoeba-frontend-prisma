import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { Header } from '../../../commons/components/header/Header';
import { SearchMainLayouts } from '../../../layouts/SearchMainLayouts';
import { useRecoilValue } from 'recoil';

import { ProfileImageAtom } from '../../../utils/atoms/ProfileImageAtom';
import { useGetUserTatoeApi } from '../../../features/top/hooks/useGetUserTatoeApi';
import { AllUserTatoe } from '../../../types/types';
import { PostedUser } from '../../../features/detail/components/PostedUser';
import { DetailTatoeTitle } from '../../../features/detail/components/DetailTatoeTitle';

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
                  text-md
                  leading-loose
                  text-gray-600"
              >
                {item.description}
              </p>
              <div className="mt-12 mx-auto">
                {item.imageUrl ? <img src={item.imageUrl} alt="例えの説明画像" className="mx-auto" /> : null}
              </div>
            </div>
          ) : null;
        })}
      </SearchMainLayouts>
    </>
  );
};

export default SearchResult;
