import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../../components/Header/Header';
import { RegisterTatoeHeadline } from '../../components/Register/RegisterTatoeHeadline';
import { RegisterTatoeParent } from '../../components/Register/RegisterTatoeParent';
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
              frame-large
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
