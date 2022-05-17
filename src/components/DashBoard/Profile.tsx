import React from 'react'
import type { User } from "../../../pages/DashBoard/index"
import { ProfileImage } from './Profileimage'

export const Profile = (props:any) => {
    const { userInfo } = props
  return (
    <div>
         <div
            className='
            flex
            flex-row
            items-center
            md:min-w-[400px]
            justify-between
            '
            >
                    <div
                    className='
                    flex
                    items-center
                    justify-between
                    '
                    >
                        <ProfileImage />
                        <div
                        className='
                        flex
                        flex-col
                        pb-2
                        border-b
                        border-gray-200
                        ml-8
                        '
                        >
                            <h1
                                className='
                                text-2xl
                                text-gray-700
                                '>
                                {userInfo[1].user_name}
                            </h1>
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
                <ul
                className='
                text-gray-600
                mt-6
                flex
                flex-col
                gap-y-2
                text-sm'>
                        <li>
                            <ul className='flex items-center'>
                                <li className='w-[128px] text-sm text-gray-400'>メールアドレス</li>
                                <li>
                                    <input
                                    value={userInfo[1].e_mail}
                                    className="
                                    h-7
                                    flex
                                    flex-1
                                    rounded-full
                                    outline-none
                                    min-w-[14rem]
                                    w-[16rem]
                                    focus:bg-gray-700
                                    focus:text-white
                                    p-3"
                                    />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex items-center text-gray-600'>
                                <li className='w-32 text-sm text-gray-400'>パスワード</li>
                                <li>
                                <input
                                    value={userInfo[1].password}
                                    className="
                                    h-7
                                    rounded-full
                                    outline-none
                                    min-w-[14rem]
                                    w-[16rem]
                                    focus:bg-gray-700
                                    focus:text-white
                                    p-3"
                                    />
                                </li>
                            </ul>
                        </li>
                </ul>
                <div
                className='
                flex
                flex-row
                justify-end
                pt-6
                '
                >
                    <button
                    className='
                    h-8
                    w-16
                    rounded-full
                    bg-dark_green
                    text-xs
                    '
                    >保存</button>
                </div>
    </div>
  )
}
