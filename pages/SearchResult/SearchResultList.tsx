import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import Link from 'next/link';
import { SearchMainLayouts } from '../../src/components/Layouts/SearchMainLayouts';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {WordsAtom} from '../../src/components/utils/atoms/WordsAtom'
import { Words } from '../../src/components/types/types';
import { SearchResultAtom } from '../../src/components/utils/atoms/SearchResultAtom'

const SearchResultList = () => {
    const [ words, setWords] = useRecoilState<Words[]>(WordsAtom)
    const [ result, setResult ]= useState([])
    // const [ result, setResult ] = useRecoilState(SearchResultAtom)
    const router = useRouter()

    //router query を１回だけ取得したい。toStringがquery = undefinedの時に機能しない
    console.log(router.query.keyWord);
    //1回目入力した値　2回目reload undefined
    //1回目の状態を保持したい

    const queryKeyWord:string = router.query.keyWord.toString()

    const [ keyWord, setKeyWord ] = useState(queryKeyWord)

    useEffect(() => {
        if(keyWord) {
            const filteredWords = words.filter((item:Words) => {

                return (
                    item.title.toLowerCase().indexOf(keyWord) !== -1 ||
                    item.description.toLowerCase().indexOf(keyWord) !== -1 ||
                    item.shortParaphrase.toLowerCase().indexOf(keyWord) !== -1
                );
            });
            setResult([...result].concat(filteredWords))
        }
    },[router.query.keyWord])

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
          {console.log("result 2",result)}
        <div className='pt-12 flex flex-col gap-6'>
        {
            router.query
            ? result.map((item)=> {
               return (
               <ul className='text-gray-800' key={item.tId}>
                    <li>
                        <Link href={`/SearchResult/${item.tId}?title=${item.title}&shortParaphrase=${item.shortParaphrase}&description=${item.description}`}>
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
                            <li>{item.title}を例えると{item.shortParaphrase}</li>
                            </span>
                        </a>
                    </Link>
                    </li>
                </ul>)
            })
            : "検索結果は0件です"
        }
        </div>
        </div>
        </SearchMainLayouts>
      </>
  )
};
export default SearchResultList