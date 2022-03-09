import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import { Header } from '../../../src/components/Header/Header';
import { SearchMain } from '../../../src/components/Layouts/SearchMain'
import { useRecoilState } from 'recoil'
import { RegisteredWordContents } from '../../../src/components/utils/RegisteredWordContents'
import { useEffect } from 'react';
import { Loading } from '../../../src/components/utils/Loading/Loading'

export default function SearchResultList () {
  // const [routerQuery, setRouterQuery] = useRecoilState(RegisteredWordContents)

  const router = useRouter()
  const { id, title, shortParaphrase, description } = router.query

  console.log(router.query);
  const isReady = router.isReady

  // if (!isReady) {
  //   return <Loading />
  // }

  // const posts: null | string[] = routerQuery

  // if (!posts) {
  //   router.push('/404')
  //   return null
  // }

  // useEffect(() => {
  //   return () => {
  //     setRouterQuery([...routerQuery,{
  //       id, title, shortParaphrase, description
  //     }])

  //   }
  // }, [routerQuery])

  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
       <SearchMain>
          <div>
            <div
            className='flex flex-col'
            >
               <small
               className="text-gray-400"
               >
                 検索結果
               </small>
               <p
               className='
               pt-2
               text-sm
               text-gray-300
               '
               >ID: {id}</p>
               <div
               className='
               flex
               relative
               '
               >
                  <h1 className="
                  text-4xl
                  text-gray-700
                  pt-6
                  scss-underline
                  ">
                    {title}をわかりやすく例えると...
                  </h1>
                  <div
                  className='
                  absolute
                  right-0
                  top-[45%]
                  '
                  >
                    <button
                    className='
                    bg-gray-200
                    text-gray-600
                    text-sm
                    rounded-md
                    py-1
                    px-2
                    '
                    >
                      編集
                    </button>
                  </div>
               </div>
            </div>
            <h2 className="pt-16 text-2xl text-gray-600">
              {shortParaphrase}
            </h2>
            <p className="
            pt-10
            text-md
            leading-loose
            text-gray-600">
              {description}
            </p>
          </div>
        </SearchMain>
      </>
  )
};
