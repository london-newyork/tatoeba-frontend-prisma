import React,{ useCallback, useState } from 'react'
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import { RegisterHeadline } from './RegisterHeadline';
import { RegisterCreateBtn } from './RegisterCreateBtn';
import { RegisterForm } from './RegisterForm'

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
                <RegisterHeadline />
                <RegisterForm />
            </div>
        </section>
    </>

  )
}
