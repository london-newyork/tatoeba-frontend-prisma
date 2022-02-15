import Head from 'next/head';
import React from 'react';
import { Header } from '../src/components/Header/Header';

export default function Login() {
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 登録ページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <section className="
          bg-gray-100
          h-screen
          px-2
          md:px-0
          mx-auto
          flex
          justify-center
          pt-9
          ">
              <div className="
              bg-white
              px-7
              pt-20
              pb-7
              rounded-md
              min-w-[20rem]
              md:w-[31.25rem]
              h-[31.25rem]
              flex
              flex-col
              items-center
              ">
                <h1 className="
                relative
                after:absolute
                after:content-['']
                after:block
                after:translate-x-5
                after:transform-gpu
                after:-bottom-[10px]
                after:w-[1em]
                after:h-[2px]
                after:bg-[#4cf048]
                text-2xl
                text-gray-700
                font-medium
                select-none
                "
                >
                    Login
                </h1>
                <p className='mt-20 text-gray-700'>Googleと連携が必要です</p>
                <button className="
                mt-8
                bg-gray-100
                px-6
                py-2
                rounded-md">
                    Gmail
                </button>
              </div>
      </section>
    </>
  )
};
