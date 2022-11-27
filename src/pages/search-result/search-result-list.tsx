import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../../commons/components/header/Header';
import { SearchMainLayouts } from '../../layouts/SearchMainLayouts';
import { useRouter } from 'next/router';

import { Tatoe } from '../../types/types';

import { useGetUserTatoeApi } from '../../features/top/hooks/useGetUserTatoeApi';
import { SearchResultToDetailBtn } from '../../commons/components/btn/SearchResultToDetailBtn';
import { ArrowIcon } from '../../features/search/ArrowIcon';
import { SearchResultListItemText } from '../../features/search/SearchResultListItemText';

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
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <SearchMainLayouts>
        <div className="flex h-screen flex-col gap-y-2">
          <small className="text-gray-500">検索結果一覧</small>
          <div className="flex flex-col gap-6 pt-12">
            {router.query
              ? result.map((item) => {
                  return (
                    <ul className="text-gray-800" key={item.tId}>
                      <li>
                        <SearchResultToDetailBtn
                          userId={item.userId}
                          tId={item.tId}
                          title={item.title}
                          shortParaphrase={item.shortParaphrase}
                          description={item.description}
                        >
                          <a
                            className="
                        group
                        flex
                        flex-row
                        items-center
                        gap-2
                        "
                          >
                            <ArrowIcon />
                            <SearchResultListItemText title={item.title} shortParaphrase={item.shortParaphrase} />
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
