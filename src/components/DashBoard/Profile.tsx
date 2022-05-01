import React from 'react'
import type { User } from "../../../pages/DashBoard/index"
import { Avatar } from './Avatar'

export const Profile = (props:any) => {
    const { userInfo } = props
  return (
    <div>
         <div
                className='
                flex
                flex-row
                items-center
                justify-between
                md:min-w-[440px]
                '
                >
                    <div
                    className='
                    flex
                    items-center
                    justify-between
                    '
                    >
                        <Avatar />
                        <div
                        className='
                        pl-9
                        flex
                        flex-col
                        '
                        >
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
                <ul className='text-gray-400 mt-4 flex flex-col gap-y-1 text-sm'>
                        <li>
                            <ul className='flex items-center'>
                                <li className='w-32'>メールアドレス</li>
                                <li>
                                    <input
                                    value={userInfo[1].e_mail}
                                    className="p-2"
                                    />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex items-center'>
                                <li className='w-32'>パスワード</li>
                                <li>
                                <input
                                    value={userInfo[1].password}
                                    className="p-2"
                                    />
                                </li>
                            </ul>
                        </li>
                </ul>
    </div>
  )
}
