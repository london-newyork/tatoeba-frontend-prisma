import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Header } from '../src/components/Header/Header';
import { LoginLayouts } from '../src/components/Layouts/LoginLayouts'
import { setStorage, getStorage } from '../src/lib/storage';

export default function Login() {
  const router = useRouter()
//   const [loginToken, setLoginToken] = useState()

  //バックエンドからきたレスポンスをもとにtokenを抽出
  useEffect(() => {
    const extractLoginToken = async() => {
      //バックエンドからtokenを抽出。この時アクセストークン(JWT)を認証に使う
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        headers: {
            Authorization: `Bearer ${getStorage('jwt')}`
        }
      })
      const data = await response.json()

      console.log(data)
    }
    extractLoginToken()
  },[])

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 ログインページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <section className="
                ">
                    <h1>Hello World</h1>
        </section>
      </LoginLayouts>
    </>
  )
};
