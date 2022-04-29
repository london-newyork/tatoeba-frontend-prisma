import React from 'react'
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../../src/components/Header/Header';
import { EditWordHeadline } from './EditWordHeadline';
import { EditWordParent } from './EditWordParent'

export default function Edit() {

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 編集ページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <section
          className="
          md:pt-[100px]
          sm:pt-[80px]
          bg-gray-100
          h-screen
          px-7
          md:px-18
          mx-auto
          pt-9
          ">
            <div
              className="
              lg:px-12
              px-7
              pt-10
              pb-10
              rounded-md
              bg-white
              mx-auto
              max-w-[1000px]
              ">
                <EditWordHeadline />
                <EditWordParent />
            </div>
        </section>
    </>

  )
}
