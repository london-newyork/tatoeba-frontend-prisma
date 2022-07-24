import Head from 'next/head';
import React, { useEffect } from 'react';
import { Header } from '../src/components/Header/Header';
import { LoginLayouts } from '../src/components/Layouts/LoginLayouts'
import { getStorage } from '../src/lib/storage';

export default function Users() {

  // バックエンドに対してアクセストークンを渡してユーザー一覧を要求
  // 汎用性を考えると関数名がこれでいいかはわからない。
  // 一旦ユーザーページとしたが、DashBoardへ振り返る予定
  useEffect(() => {
    const sendAuthUsersAccessToken = async() => {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        headers: {
            Authorization: `Bearer ${getStorage('jwt')}`
        }
      })
      const data = await response.json()

      // console.log(data)
    }
    sendAuthUsersAccessToken()
  },[])

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 ユーザーページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <section
        className="
        ">
            <h1>Hello World</h1>
        </section>
      </LoginLayouts>
    </>
  )
};
