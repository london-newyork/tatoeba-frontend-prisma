import { UsersIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { getStorage } from '../../lib/storage'
import { ProfileImage } from './ProfileImage'

type ProfileVal = string | undefined

export const Profile = (props:any) => {
    // バックエンドに対してアクセストークンを渡してユーザー一覧を要求
    // 汎用性を考えると関数名がこれでいいかはわからない。
    useEffect(() => {
        const sendAuthUsersAccessToken = async() => {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
            headers: {
                Authorization: `Bearer ${getStorage('jwt')}`
            }
        })
        await response.json()
        }
        sendAuthUsersAccessToken()
    },[])

    // emailとuserNameをapiのデータから取り出して表示(passwordは表示しない)

    const [ currentEmail, setCurrentEmail ] = useState<ProfileVal>('')
    const [ userName, setUserName ] = useState<ProfileVal>('')

    const handleChangeUserName = (
        e: React.ChangeEvent<HTMLInputElement> | undefined
        ):void  => {
            const currentUserName = "" //DBからユーザーのデータをここに送る
            if(!userName){
                setUserName(currentUserName)
            }
            setUserName(e.target.value)
    }

  return (
    <div
    className='group'
    >
         <div
            className='
            flex
            flex-row
            items-center
            md:min-w-[400px]
            sm:justify-between
            justify-center
            '
            >
                    <div
                    className='
                    flex
                    items-center
                    flex-col
                    sm:flex-row
                    sm:justify-between
                    justify-center
                    gap-y-2
                    sm:gap-y-0
                    position
                    relative
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
                        sm:ml-8
                        '
                        >
                            <h1
                                className='
                                text-2xl
                                text-gray-700
                                '>
                                    <input
                                    value={userName}
                                    onChange={handleChangeUserName}
                                    placeholder='Nola Stradford'
                                    >
                                    </input>
                            </h1>

                        </div>
                    </div>
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
                            <ul
                            className='
                            flex
                            items-start
                            sm:items-center
                            flex-col
                            sm:flex-row
                            justify-start
                            '>
                                <li className='
                                pl-3
                                sm:pl-0
                                sm:w-[128px]
                                text-sm
                                text-gray-400'>
                                    メールアドレス
                                </li>
                                <li
                                value={currentEmail}
                                className="
                                h-7
                                flex
                                flex-1
                                sm:min-w-[14rem]
                                sm:w-[20rem]
                                w-[18rem]
                                p-4
                                m-2
                                "
                                >
                                </li>
                            </ul>
                        </li>
                        <li
                        className='
                        min-w-[16rem]
                        w-full
                        pl-3
                        sm:pl-0
                        flex
                        flex-col
                        sm:flex-row
                        justify-between'
                        >
                            <ul
                            className='
                            flex
                            items-start
                            sm:items-center
                            flex-col
                            sm:flex-row
                            justify-start'>
                                <li
                                className='
                                sm:w-[128px]
                                text-sm
                                text-gray-400
                                '
                                >
                                 パスワード
                                </li>
                                <li
                                className='
                                sm:pl-4
                                pl-2
                                m-2
                                text-gray-400
                                tracking-widest
                                '
                                >
                                ******
                                </li>
                            </ul>
                            <button
                                className='
                                text-gray-400
                                '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                            </button>
                        </li>
                </ul>
    </div>
  )
}
