import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Header } from '../../src/components/Header/Header'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoardLayouts'
import { Avatar } from './Avatar'

const DashBoard = () => {

type User = {
    user_id: string
    user_name: string
    e_mail: string
    password: string
    casted_list_id: string //既存の型を追加予定
    title: string //既存の型を追加予定
    shortParaphrase: string //既存の型を追加予定
    description: string //既存の型を追加予定
    t_images_url: string //既存の型を追加予定
    followed: number | null
}

// type PickedUser = Pick<User, "user_id" |"user_name"| "e_mail" | "password">

const userInfo:User[]= [
    {user_id: "111111", user_name: "Vincent Thames", e_mail: "test_Vincent@gmail.com", password:"15555xxrQ", casted_list_id: "ddddda1111", title: "API", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_images_url: "/...", followed:1 },
    {user_id: "222222", user_name: "Nola StradFord", e_mail: "test_Nola@gmail.com", password:"15555xxrQ", casted_list_id: "bbbbbasdg", title: "SQL", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_images_url: "/...", followed:1 },
    {user_id: "333333", user_name: "test_Christel", e_mail: "test_Christel@gmail.com", password:"15555xxrQ", casted_list_id: "zrzsz35df", title: "サーバー", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_images_url: "/...", followed:1 },
]

  return (
    <div>
        <Header />
        <DashBoardLayouts>
        <div className='flex flex-row justify-between min-w-[600px]'>
            <div
            className='
            flex
            flex-row
            items-center
            '
            >
                <Avatar />
                <div
                className='
                pl-9
                flex
                gap-12
                '
                >
                    <div
                    className='
                    flex
                    flex-col
                    '>
                        <p
                            className='
                            pb-2
                            text-xs
                            text-gray-300

                            '
                            >ID:{userInfo[1].user_id}</p>
                                <h1
                                    className='
                                    text-2xl
                                    text-gray-700
                                    flex
                                    pb-2
                                    border-b
                                    border-gray-200
                                    '>
                                    {userInfo[1].user_name}
                                </h1>
                    </div>
                    <ul className='text-gray-400 mt-4 flex flex-col gap-y-1 text-sm'>
                        <li className='flex gap-2'>e-mail:
                            <input value={userInfo[1].e_mail}></input>
                        </li>
                        <li className='flex gap-2'>password:
                            <input value={userInfo[1].password}></input>
                        </li>
                    </ul>
                </div>
                </div>
                <button
                        className='
                        text-gray-400
                        '
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-300' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                    </button>
            </div>
            <div
            className='
            border-b
            border-gray-200
            h-[48px]
            '
            >
            </div>
            <div className='flex flex-row pt-6 gap-3'>
                <Link
                    href="/Register"
                    >
                    <button
                    type='button'
                    className='w-6 h-6 bg-mint_green rounded-full'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                    </Link>
                    <p className='text-gray-800'>新規投稿</p>
            </div>
            <div className='pt-8'>
                <h2
                className='
                text-md
                text-gray-600
                '
                >
                    [投稿一覧]
                </h2>
            </div>
            <ul
            className='
            flex
            pt-4
            items-center
            '
            >
                <li>
                    <ul className='flex gap-3'>
                        <li className='text-gray-200'>{userInfo[1].casted_list_id}</li>
                        <li
                        className='
                        pr-4
                        text-gray-500
                        w-[300px]
                        '
                        >
                            {userInfo[1].title}
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='flex gap-2'>
                    <li
                    className='
                    '
                    >
                        <Link
                        href="/Edit/[id]"
                        as="/Edit"
                        >
                        <button
                            className='
                            text-gray-400
                            '
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-300' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                        </button>
                        </Link>
                    </li>

                        
                        <li>
                            <button
                            className='
                            text-gray-400
                            '
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                            className='
                            text-gray-400
                            '
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                            </button>
                            <span
                            className='text-mid_green text-xs'
                            >
                                {userInfo[1].followed}
                            </span>
                        </li>
                        </ul>
                </li>
            </ul>
        </DashBoardLayouts>
    </div>
  )
}

export default DashBoard