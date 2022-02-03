import React from 'react'
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';

export default function Register() {
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 登録ページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <section
          className="
          bg-gray-100
          h-screen
          px-7
          md:px-20
          mx-auto
          pt-9
          ">
            <div
              className="
              lg:px-12
              px-5
              pt-8
              pb-10
              rounded-md
              bg-white
              mx-auto
              max-w-[1000px]
              ">
                <h1
                  className="
                  scss-underline
                  text-2xl
                  text-gray-700
                  font-medium
                  select-none">
                    例えの登録
                </h1>
                <form
                method="post"
                className="pt-10 flex flex-col gap-8">
                  <div
                    className="
                    flex
                    justify-between
                    flex-col
                    lg:flex-row">
                    <label className='
                      text-gray-500
                      w-[250px]
                      pb-2
                      md:pb-2
                      lg:pb-0
                      select-none'>
                      わかりにくい言葉<br />
                      <span className="text-xs text-gray-400">50文字以内</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder='サーバー'
                      maxLength={50}
                      className="
                      max-w-[700px]
                      shadow-sm
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      p-3
                      block
                      w-full
                      text-sm
                      md:text-sm
                      text-gray-700
                      border
                      border-gray-300
                      rounded-md">
                    </textarea>
                  </div>
                  <div
                    className="
                    flex
                    justify-between
                    flex-col
                    lg:flex-row
                    ">
                    <label className='
                      text-gray-500
                      w-[250px]
                      pb-2
                      md:pb-2
                      lg:pb-0
                      select-none'>
                      短く例えると
                      <br />
                      <span className="text-xs text-gray-400">50文字以内</span>
                    </label>
                    <input
                      placeholder='土地'
                      type="text"
                      className='
                      max-w-[700px]
                      shadow-sm
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      p-3
                      block
                      w-full
                      text-sm
                      md:text-sm
                      text-gray-700
                      border
                      border-gray-300
                      rounded-md'
                      ></input>
                  </div>
                  <div
                    className="
                    flex
                    justify-between
                    flex-col
                    lg:flex-row">
                    <label
                      className='
                      text-gray-500
                      w-[250px]
                      pb-2
                      md:pb-2
                      lg:pb-0
                      select-none'>
                        詳しい説明
                      <br />
                      <span className="text-xs text-gray-400">50文字以内</span>
                    </label>
                    <textarea
                    name="description"
                    rows={8}
                    className="
                      max-w-[700px]
                      shadow-sm
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      px-3
                      pt-3
                      block
                      w-full
                      text-sm
                      md:text-sm
                      text-gray-700
                      border
                      border-gray-300
                      rounded-md
                      "
                    placeholder="WEBサイトを「家」とすると、サーバーは「土地」に例えられます。"
                    defaultValue={''}
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                    type="button"
                    className="
                    p-3
                    w-[200px]
                    rounded-3xl
                    bg-dark_green
                    text-white
                    text-lg
                    hover:bg-opacity-90
                    ">
                      投稿する
                    </button>
                  </div>
                </form>
            </div>
        </section>
    </>

  )
}
