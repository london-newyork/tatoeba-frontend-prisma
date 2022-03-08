import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import { SearchMain } from '../../src/components/Layouts/SearchMain'
import { useRecoilState } from 'recoil'
import { RegisteredWordContents } from '../../src/components/utils/RegisteredWordContents'

export default function SearchResultList ({id, title, shortParaphrase, description}) {
  const [routerQuery, setRouterQuery] = useRecoilState(RegisteredWordContents)
  console.log('routerQuery',routerQuery);

  const router = useRouter();
  // console.log(title);

  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
       <SearchMain>
         { /* {mapで回す} */ }
         {routerQuery.map(item => (
           <div
           key={item.id}>
            <div
            className='flex flex-col'
            >
               <small
               className="text-gray-400"
               >
                 検索結果
               </small>
               <h1 className="
               text-4xl
               text-gray-700
               pt-6
               scss-underline
               ">
                 {item.title}をわかりやすく例えると...
              </h1>
            </div>
            <h2 className="pt-16 text-2xl text-gray-600">
              {item.shortParaphrase}
            </h2>
            <p className="
            pt-10
            text-md
            leading-loose
            text-gray-600">
              {item.description}
            </p>
          </div>
         )
         )}
        </SearchMain>
      </>
  )
};
