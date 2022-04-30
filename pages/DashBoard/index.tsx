import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Header } from '../../src/components/Header/Header'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoardLayouts'
import { Avatar } from './Avatar'

const DashBoard = () => {

type User = {
    user_id: string
    your_name: string
}

const userInfo = [
    {user_id: "111111", user_name: "Vincent Thames", e_mail: "test_Vincent@gmail.com", password:"15555xxrQ", casted_list_id: "ddddda1111", title: "API", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_images_url: "/..." },
    {user_id: "222222", user_name: "Nola StradFord", e_mail: "test_Nola@gmail.com", password:"15555xxrQ", casted_list_id: "bbbbbasdg", title: "SQL", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_images_url: "/..." },
    {user_id: "333333", user_name: "test_Christel", e_mail: "test_Christel@gmail.com", password:"15555xxrQ", casted_list_id: "zrzsz35df", title: "サーバー", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_images_url: "/..." },
]

  return (
    <div>
        <Header />
        <DashBoardLayouts>
            <div
            className='
            flex
            items-center
            '
            >
                <Avatar />
                <div
                className='
                flex
                flex-col
                pl-9
                '
                >
                    <h1
                        className='
                        text-2xl
                        text-gray-700
                        flex
                        gap-6
                        '>
                        <span className='text-gray-400'>UserName:</span>{userInfo[1].user_name}
                    </h1>
                    <p
                    className='
                    pt-1
                    text-xs
                    text-gray-300
                    '
                    >ID: 1111111111</p>
                </div>
            </div>
            <div
            className='
            border-b
            border-gray-200
            h-[48px]
            '
            >
            </div>
            <div className='pt-8 flex gap-4 items-center flex-row'>
                <h2
                className='
                text-md
                text-gray-600
                '
                >
                    [投稿一覧]
                </h2>
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
            </div>
            <ul
            className='
            flex
            pt-4
            items-center
            '
            >
                <li
                className='
                pr-4
                text-gray-500
                w-[300px]
                '
                >
                    リスト1
                </li>
                <li
                className='
                pr-2
                '
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
            </ul>
        </DashBoardLayouts>
    </div>
  )
}

export default DashBoard