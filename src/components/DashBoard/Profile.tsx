import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { ProfileImage } from './ProfileImage'

type ProfileVal = string | undefined

export const Profile = (props:any) => {
    // const { userInfo } = props
    const [ email, setEmail ] = useState<ProfileVal>()
    const [ password, setPassword ] = useState<ProfileVal>()
    const [ userName, setUserName ] = useState<ProfileVal>()
    const handleChangePassword = (
        e: React.ChangeEvent<HTMLInputElement> | undefined
        ):void => {
            const existingPassword = "" //DBからユーザーのデータをここに送る
            if(!password){
                setPassword(existingPassword)
            }
            setPassword(e.target.value)
    }
    const handleChangeEmail = (
        e: React.ChangeEvent<HTMLInputElement> | undefined
        ):void => {
            const existingEmail = "" //DBからユーザーのデータをここに送る
            if(!email){
                setEmail(existingEmail)
            }
            setEmail(e.target.value)
    }
    const handleChangeUserName = (
        e: React.ChangeEvent<HTMLInputElement> | undefined
        ):void  => {
            const existingUserName = "" //DBからユーザーのデータをここに送る
            if(!userName){
                setUserName(existingUserName)
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
                                    onChange={handleChangeUserName}>
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
                                <li>
                                    <input
                                    value={email}
                                    className="
                                    h-7
                                    flex
                                    flex-1
                                    rounded-full
                                    outline-none
                                    sm:min-w-[14rem]
                                    sm:w-[16rem]
                                    focus:bg-gray-700
                                    focus:text-white
                                    p-3
                                    "
                                    onChange={handleChangeEmail}
                                    />
                                </li>
                            </ul>
                        </li>
                        <li>
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
                                pl-3
                                sm:pl-0
                                sm:w-[128px]
                                text-sm
                                text-gray-400
                                '
                                >
                                 パスワード
                                </li>
                                <li>
                                <input
                                    value={password}
                                    className="
                                    h-7
                                    flex
                                    flex-1
                                    rounded-full
                                    outline-none
                                    sm:min-w-[14rem]
                                    sm:w-[16rem]
                                    focus:bg-gray-700
                                    focus:text-white
                                    p-3
                                    "
                                    onChange={handleChangePassword}
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
                gap-x-3
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
                    >
                    編集
                    </button>
                    <button
                    className='
                    h-8
                    w-16
                    rounded-full
                    border-dark_green
                    border-2
                    text-xs
                    '
                    >保存</button>
                </div>
    </div>
  )
}
