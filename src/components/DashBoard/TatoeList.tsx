import React from 'react'
import { useRecoilState } from 'recoil'
import { FollowerAtom } from '../utils/atoms/FollowerAtom'
import { Words } from '../../../src/components/types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'
import Link from 'next/link'
import { useHandleMoveToRegister } from '../hooks/handleMoveToRegister'
import { useRouter } from 'next/router'
import { DeleteWordsBtn } from '../btn/DeleteWordsBtn'

export const TatoeList = (props:any) => {
    const { userInfo } = props
    const router = useRouter()
    const query = router.query

    const [follower, setFollower] = useRecoilState(FollowerAtom)
    const [words, setWords] = useRecoilState<Words[]>(WordsAtom)

    const { handleMoveToRegister } = useHandleMoveToRegister({words})

    const handleConfirmFollower = () => {
        //WIP userInfoのうち、ユーザーのクリックされた例えリスト固有のfollower情報を取得して、配列へ押し込む
        // setFollower((prev:any)=>{
        // [{userInfo}, ...prev]
        // })
    }

    //更新後の値をwordsの中に入れないと元のリストが更新されず、新しいリストが生成されてしまう。

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
                    justify-between
                    '
                    key={item.tId}
                    >
                        <li>
                            <ul className='flex gap-3 items-center'>
                                <li className='text-gray-100 text-xs'>
                                    {item.creationTime}
                                </li>
                                <li
                                className='
                                pr-4
                                text-white
                                '
                                >
                                    {item.title}
                                    <span className='text-gray-400'>を例えると</span>
                                    {item.shortParaphrase}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex gap-2 items-center'>
                            <li
                                className='
                                flex items-center
                                '
                                >
                                    <button
                                        className='
                                        text-gray-400
                                        '
                                        onClick={handleMoveToRegister}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-300' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                    </button>
                                </li>
                                <DeleteWordsBtn tId={item.tId} />
                                <li className='flex items-center'>
                                    <Link
                                    href="/follower/[id]"
                                    as="/follower"
                                    >
                                        <button
                                        className='
                                        text-gray-400
                                        '
                                        onClick={handleConfirmFollower}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                        </button>
                                        </Link>
                                        {/* ここにuserIdとfollowerのuserIdが合った時の条件で式を作成する */}
                                    {/* <span
                                    className='text-mid_green text-xs'
                                    >{item.followedCount}</span> */}
                                </li>
                            </ul>
                        </li>
                    </ul>)
        })
        :null}
    </div>
  )
}
