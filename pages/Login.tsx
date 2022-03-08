import Head from 'next/head';
import React from 'react';
import { Header } from '../src/components/Header/Header';

export default function Login() {
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 ログインページ</title>
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
                after:translate-x-9
                after:transform-gpu
                after:-bottom-[10px]
                after:w-[1em]
                after:h-[2px]
                after:bg-[#4cf048]
                text-3xl
                text-gray-700
                select-none
                font-semibold
                "
                >
                    ログイン
                </h1>
                {/* <button className="
                bg-gray-100
                mt-12
                px-6
                py-2
                rounded-md">
                    Gmail
                </button> */}
                <div className='pt-14 flex flex-col gap-6'>
                  <div className='flex flex-col'>
                    <p
                    className='
                    pr-2
                    font-semibold
                    text-gray-600
                    w-[128px]'>
                      メールアドレス
                    </p>
                    <input
                    className='
                    shadow-sm
                    outline-none
                    focus:ring-2
                    focus:ring-offset-3
                    focus:ring-green-100
                    focus:ring-offset-green-50
                    focus:border-green-100
                    focus:placeholder-gray-300
                    h-8
                    p-2
                    w-[300px]
                    border
                    border-gray-200
                    rounded-md
                    '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p
                    className='
                    pr-2
                    text-gray-600
                    w-[128px]
                    font-semibold'>パスワード</p>
                      <input
                      className='
                      shadow-sm
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      h-8
                      p-2
                      w-[300px]
                      border
                      border-gray-200
                      rounded-md
                      '
                      />
                    </div>
                  <button
                  className='
                  mt-10
                  mx-auto
                  p-3
                  w-full
                  rounded-md
                  bg-dark_green
                  text-white
                  text-lg
                  hover:bg-opacity-90
                  '
                  >ログイン</button>
                </div>

              </div>
      </section>
    </>
  )
};
