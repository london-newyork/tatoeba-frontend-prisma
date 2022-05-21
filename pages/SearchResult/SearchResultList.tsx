import React from 'react';
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import Link from 'next/link';
import { SearchMainLayouts } from '../../src/components/Layouts/SearchMainLayouts';
import { useRouter } from 'next/router';

const SearchResultList = () => {

    const router = useRouter()
    const filteredWords = router.query.filteredWordsItems
    console.log("filteredWords",filteredWords);
    
  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果一覧</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <SearchMainLayouts>
          <div className='h-screen flex flex-col gap-y-2'>
          <small className="text-gray-500">検索結果一覧</small>
        {
            filteredWords
            ? (
            [filteredWords].map((item)=> {
                <div>aaaa</div>
            }))
            : "検索結果は0件です"
        }
            <ul className="pt-12">
                <li>
                    <Link href="/SearchResult/[tId]">
                        {/*  as={`/SearchResult/${router.query.id}`} */}
                        <a
                        className="
                        flex
                        flex-row
                        items-center
                        gap-2
                        group
                        ">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="
                                h-3
                                w-3
                                text-white
                                group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <span
                            className='group-hover:text-q_dark_green'
                            >
                            {`test`}
                            </span>
                        </a>
                    </Link>
                </li>
            </ul>
            </div>
        </SearchMainLayouts>
      </>
  )
};
export default SearchResultList