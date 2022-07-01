import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { FollowerAtom } from '../utils/atoms/FollowerAtom'
import { Words } from '../../../src/components/types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DeleteWordsBtn } from '../btn/DeleteWordsBtn'
import { EditBtn } from '../btn/EditBtn'

export const TatoeList = (props:any) => {
    const { userInfo } = props

    const [follower, setFollower] = useRecoilState(FollowerAtom)
    const [words, setWords] = useRecoilState<Words[]>(WordsAtom)

    const handleConfirmFollower = () => {
        //WIP userInfoのうち、ユーザーのクリックされた例えリスト固有のfollower情報を取得して、配列へ押し込む
        // setFollower((prev:any)=>{
        // [{userInfo}, ...prev]
        // })
    }

  return (
    <div>
       {words.length ?
       words.map(item => {

           return (
                    <ul
                    className='
                    flex
                    pt-4
                    items-center
                    gap-y-2
                    sm:gap-y-0
                    flex-row
                    sm:justify-between
                    group
                    '
                    key={item.tId}
                    >
                        <li>
                            <ul
                            className={`
                            lg:flex
                            block
                            lg:flex-row
                            md:flex-col
                            sm:flex-col
                            flex-row
                            lg:gap-3
                            md:gap-1
                            items-center
                            flex-start
                            `}
                            >
                                <li
                                className='
                                flex
                                text-gray-400
                                text-xs
                                w-[124px]'>
                                    {item.creationTime}
                                </li>
                                <li>
                                    <ul
                                    className='
                                    min-w-[20rem]
                                    w-full
                                    sm:min-w-[24rem]
                                    sm:w-full
                                    sm:max-w-none
                                    flex
                                    flex-row
                                    justify-between
                                    '
                                    >
                                        <li
                                        className='
                                        pr-4
                                        text-gray-700
                                        sm:min-w-[300px]
                                        sm:w-full
                                        sm:max-w-none
                                        '
                                        >
                                        {item.title}
                                        <span className='text-gray-400'>を例えると</span>
                                        {item.shortParaphrase}
                                        </li>

                                    <li
                                    className={`
                                    flex
                                    flex-row
                                    gap-2
                                    items-center
                                    opacity-0
                                    group-hover:opacity-100
                                    `}>
                                        <EditBtn
                                        tId={item.tId}
                                        title={item.title}
                                        shortParaphrase={item.shortParaphrase}
                                        description={item.description}/>
                                        <DeleteWordsBtn tId={item.tId} />
                                        <li
                                        className='
                                        flex
                                        items-center'>
                                            <Link
                                            href="/follower/[id]"
                                            as="/follower"
                                            >
                                                <button
                                                onClick={handleConfirmFollower}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                        </svg>
                                                </button>
                                                </Link>
                                                {/* ここにuserIdとfollowerのuserIdが合った時の条件で式を作成する */}
                                            {/* <span
                                            className='text-mid_green text-xs'
                                            >{item.followedCount}</span> */}
                                        </li>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>)
        })
        :null}
    </div>
  )
}
