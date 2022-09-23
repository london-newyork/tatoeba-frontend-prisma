import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../../components/Header/Header';
import Link from 'next/link';
import { SearchMainLayouts } from '../../components/Layouts/SearchMainLayouts';
import { useRouter } from 'next/router';

import { Tatoe } from '../../components/types/types';

import { useGetUserTatoeApi } from '../../components/hooks/useGetUserTatoeApi';
import { SearchResultToDetailBtn } from '../../components/btn/SearchResultToDetailBtn';

const SearchResultList = () => {
  const [result, setResult] = useState([]);

  const router = useRouter();

  const queryKeyWord: string = router.query.keyWord as string;

  const [keyWord, setKeyWord] = useState(queryKeyWord);
  const [filteredTatoe, setFilteredTatoe] = useState<Tatoe[] | undefined>();

  const { getEachTatoe, allUserTatoe } = useGetUserTatoeApi(filteredTatoe);

  useEffect(() => {
    const main = async () => {
      await getEachTatoe();
    };
    main();

    if (!allUserTatoe) return;
    if (keyWord) {
      const newFilteredTatoe = allUserTatoe.filter((item: Tatoe) => {
        return (
          item.title.toLowerCase().indexOf(keyWord) !== -1 ||
          item.description.toLowerCase().indexOf(keyWord) !== -1 ||
          item.shortParaphrase.toLowerCase().indexOf(keyWord) !== -1
        );
      });
      setResult([...result].concat(newFilteredTatoe));
      setFilteredTatoe(newFilteredTatoe);
    }
  }, [router.query.keyWord]);
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 検索結果一覧</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <SearchMainLayouts>
        <div className='h-screen flex flex-col gap-y-2'>
          <small className='text-gray-500'>検索結果一覧</small>
          {console.log('result 2', result)}
          <div className='pt-12 flex flex-col gap-6'>
            {router.query
              ? result.map((item) => {
                  return (
                    <ul className='text-gray-800' key={item.tId}>
                      <li>
                        <SearchResultToDetailBtn
                          userId={item.userId}
                          tId={item.tId}
                          title={item.title}
                          shortParaphrase={item.shortParaphrase}
                          description={item.description}
                        >
                          <a
                            className='
                        flex
                        flex-row
                        items-center
                        gap-2
                        group
                        '
                          >
                            <span
                              className='
                             h-8
                             w-8
                             rounded-full
                             bg-gray-800
                             border-2
                             border-gray-800
                             flex
                             justify-center
                             items-center
                             group-hover:bg-q_dark_green
                             group-hover:border-q_dark_green
                             '
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='
                                h-3
                                w-3
                                text-white
                                group-hover:text-white'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='M9 5l7 7-7 7'
                                />
                              </svg>
                            </span>
                            <span className='group-hover:text-q_dark_green'>
                              <li>
                                {item.title}を例えると{item.shortParaphrase}
                              </li>
                            </span>
                          </a>
                        </SearchResultToDetailBtn>
                      </li>
                    </ul>
                  );
                })
              : '検索結果は0件です'}
          </div>
        </div>
      </SearchMainLayouts>
    </>
  );
};
export default SearchResultList;
