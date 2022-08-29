import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../../components/Header/Header';
import { RegisterTatoeHeadline } from './RegisterTatoeHeadline';
import { RegisterTatoeParent } from './RegisterTatoeParent';
import { useRouter } from 'next/router';

export default function Register() {
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 登録ページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <section
        className='
          md:pt-[100px]
          pt-[80px]
          px-7
          md:px-18
          mx-auto
          mb-12
          '
      >
        <div
          className='
              lg:px-12
              px-7
              pt-10
              pb-10
              rounded-3xl
              bg-white
              border-[1px]
              border-gray-800
              mx-auto
              max-w-[1000px]
              '
        >
          <RegisterTatoeHeadline />
          <RegisterTatoeParent />
        </div>
      </section>
    </>
  );
}
