import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../../src/components/Header/Header';
import { LoginLayouts } from '../../src/components/Layouts/LoginLayouts'

const TempRegisterMember = () => {

  const [ postData, setPostData ] = useState<string | undefined>()
  const router = useRouter()

  //backend側にリクエストする
    const handleTempRegisterMember = async() => {
      console.log("postData",postData);
      await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/registrations",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: postData })
      }
      )
      //仮登録完了しました。指定したメールアドレスにメールが届きますのでご確認ください。というページへ飛ぶ
      await router.push({
        pathname: '/RegisterMember/InformCompletedTempRegistrationMember'
      }
      )
    }

    const handleChangePost = (e) => {
      setPostData(e.target.value)
    }

  return (
    <>
      <Head>
        <title>新規会員登録</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <section className="
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
                  text-3xl
                  text-gray-500
                  select-none
                  font-normal
                  "
                  >
                      新規会員登録
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
                      value={postData}
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
                      onChange={handleChangePost}
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
                    '
                    onClick={handleTempRegisterMember}
                    >新規会員登録</button>
                  </div>
                </div>
        </section>
      </LoginLayouts>
    </>
  )
};

export default TempRegisterMember
