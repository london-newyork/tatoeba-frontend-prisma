import React from 'react';
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import { SearchMain } from '../../src/components/Layouts/SearchMain'

export default function SearchResultList () {
  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果一覧</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
       <SearchMain>
            <div className='flex flex-col'>
                <small className="text-gray-400">検索結果一覧</small>
                <h1 className="
                text-4xl
                text-gray-700
                pt-6
                scss-underline
                ">サーバーをわかりやすく例えると...</h1>
            </div>
            <h2 className="pt-16 text-2xl text-gray-600">土地</h2>
            <p className="
            pt-10
            text-md
            leading-loose
            text-gray-600">WEBサイトの構築手順の中で、WEBサイトが家だとすると、サーバーは土地に例えられます。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
        </SearchMain>
      </>
  )
};
