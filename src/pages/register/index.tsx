import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '@Components/header/Header';

import { RegisterTatoeHeadline } from '@Components/register/RegisterTatoeHeadline';
import CreateTatoePage from './CreateTatoePage';

export default function Register() {
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 登録ページ</title>
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <section
        className="
          mx-auto
          mb-12
          px-7
          pt-[80px]
          md:px-16
          md:pt-[100px]
          "
      >
        <div
          className="
              frame-large
              mx-auto
              max-w-[1000px]
              "
        >
          <RegisterTatoeHeadline />
          <CreateTatoePage />
        </div>
      </section>
    </>
  );
}
