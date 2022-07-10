import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../../src/components/Header/Header';
import { LoginLayouts } from '../../src/components/Layouts/LoginLayouts';

const SuggestCompleteRegistrationMember = () => {
const [postEmail, setPostEmail] = useState<string>()
const [postPassWord, setPostPassWord] = useState<string>()

const router = useRouter()

  const handleChangeEmail = (e) => {
    setPostEmail(e.target.value)
  }

  const handleChangePassWord = (e) => {
    setPostPassWord(e.target.value)
  }
  //パスワードとメールアドレスのデータをAPIへ送る
  const handleCompleteRegisterMember = async() => {

    //API側で受け取るエンドポイントはregistrationsではないはず
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/registrations",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ postEmail, postPassWord })
    }
    )
    //topページへ戻る
    await router.push({
      pathname:"/"
    })
  }

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 本登録操作ページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <section className="
            bg-gray-100
            h-screen
            px-2
            md:px-0
            mx-auto
            flex
            justify-center
            ">
                <div className="
                bg-white
                px-7
                pt-20
                pb-7
                rounded-3xl
                border-[1px]
                border-gray-800
                min-w-[24rem]
                md:w-[24rem]
                h-[31.25rem]
                flex
                flex-col
                items-center
                ">
                  <h1 className="
                  relative
                  text-3xl
                  text-gray-700
                  select-none
                  font-normal
                  "
                  >
                      パスワードとメールアドレスを登録し、会員登録を完了させてください。
                  </h1>
                  <div className='pt-14 flex flex-col gap-6'>
                    <div className='flex flex-col'>
                      <p
                      className='
                      pr-2
                      font-normal
                      text-gray-600
                      w-[128px]
                      text-sm
                      pb-2
                      '>
                        メールアドレス
                      </p>
                      <input
                      className='
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      h-8
                      py-2
                      px-3
                      w-[300px]
                      border
                      border-gray-200
                      rounded-full
                      '
                      onChange={handleChangeEmail}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p
                      className='
                      pr-2
                      text-gray-600
                      w-[128px]
                      text-sm
                      pb-2
                      '>パスワード</p>
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
                        py-2
                        px-3
                        w-[300px]
                        border
                        border-gray-200
                        rounded-full
                        '
                        onChange={handleChangePassWord}
                        />
                      </div>
                    <button
                    className='
                    mt-4
                    mb-4
                    mx-auto
                    p-3
                    w-full
                    rounded-full
                    bg-dark_green
                    text-gray-800
                    text-lg
                    hover:bg-opacity-90
                    font-normal
                    '
                    onClick={handleCompleteRegisterMember}
                    >本登録完了</button>
                  </div>
                  <Link
                  href="/RegisterMember"
                  >
                  <p
                  className='
                  mx-auto
                  text-sm
                  text-gray-600
                  '>
text

                  </p>
                  </Link>
                </div>
        </section>
      </LoginLayouts>
    </>
  )
};

export default SuggestCompleteRegistrationMember
