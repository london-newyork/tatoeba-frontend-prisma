import React from 'react'
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import { RegisterWordHeadline } from './RegisterWordHeadline';
import { RegisterWordParent } from './RegisterWordParent'

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
                <RegisterWordHeadline />
                <RegisterWordParent />
            </div>
        </section>
    </>

  )
}
