import { ParsedUrlQuery } from 'querystring'
import React, { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { CardProps, Words } from '../types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'

export const CardChild:VFC = (props) => {
    const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(WordsAtom)
  return (
    <>
        {words
        ? words.map((item:Words) => (
                    <li
                    key={item.tId}
                    className='
                    px-6
                    pt-8
                    pb-2
                    h-[312px]
                    w-[280px]
                    rounded-md
                    drop-shadow-2xl
                    bg-white
                    '
                    // onClick={() => handleMoveToResult(
                    //                 item.tId,
                    //                 item.title,
                    //                 item.shortParaphrase,
                    //                 item.description,
                    // )}
                    >
                        <ul
                        className='
                        h-[72px]
                        pl-1
                        '>
                            {/* <li className='text-gray-300 text-xs'>{item.tId}</li> */}
                            <li>
                                <h3 className='
                                text-left
                                text-dark_green
                                text-lg
                                '>
                                    {item.title}
                                    <br />
                                    <span className='text-gray-500'>
                                        を例えると...
                                    </span>
                                    {item.shortParaphrase}
                                </h3>
                            </li>
                        </ul>
                        <ul className='
                        pt-5
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                        </ul>
                    </li>
                )
            ): undefined }


    </>
  )
}
