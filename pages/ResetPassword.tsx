import { Header } from "../src/components/Header/Header"
import { LoginLayouts } from "../src/components/Layouts/LoginLayouts"
import React, { useState } from 'react'
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

const ResetPassword = () => {
    const router = useRouter()
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value)
  }

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value)
  }
  //ここにパスワード再設定を書く ログイン必須の状態にする
  const handleResetPassword = async () => {
    if(!currentPassword || !newPassword){
        alert('パスワードが入力されていません')
    }
    //成功時
    await alert('パスワードが再設定されました。')
    await router.push('/')
  }

    return (
        <div>
            <Head>
                <title>Tatoeba 例え話 パスワード再設定ページ</title>
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
                        パスワード再設定
                    </h1>
                    <div className='pt-14 flex flex-col gap-6'>
                        <div className='flex flex-col'>
                        <p
                        className='
                        pr-2
                        text-gray-600
                        w-[128px]
                        text-sm
                        pb-2
                        '>現在のパスワード</p>
                            <input
                            value={currentPassword}
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
                            onChange={handleChangeCurrentPassword}
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
                        '>新パスワード</p>
                            <input
                            value={newPassword}
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
                            onChange={handleChangeNewPassword}
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
                        onClick={handleResetPassword}
                        >パスワード再設定</button>
                    </div>
                    </div>
                </section>
            </LoginLayouts>
        </div>

    )
}

export default ResetPassword