import React from 'react'
import { Header } from '../src/components/Header/Header'
import { MyPageMain } from '../src/components/Layouts/MyPageMain'

const MyPage = () => {
  return (
    <div>
        <Header />
        <MyPageMain>
            <div
            className='
            flex
            items-center
            '
            >
                <div
                className='
                bg-gray-200
                h-[100px]
                w-[100px]
                rounded-full
                '
                >
                    <img src="" alt="" />
                </div>
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
                        '>
                        ユーザーネーム
                    </h1>
                    <p
                    className='
                    pt-1
                    text-sm
                    text-gray-400
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
            <h2
            className='
            pt-8
            text-md
            text-gray-600
            '
            >
                投稿一覧
            </h2>
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
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 text-gray-400' fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </li>
            </ul>
        </MyPageMain>
    </div>
  )
}

export default MyPage