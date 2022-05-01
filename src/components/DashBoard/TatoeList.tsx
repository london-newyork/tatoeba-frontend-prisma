import Link from 'next/link'
import React from 'react'

export const TatoeList = (props:any) => {
    const { userInfo } = props
  return (
    <div>
        <ul
        className='
        flex
        pt-4
        items-center
        '
        >
            <li>
                <ul className='flex gap-3 items-center'>
                    <li className='text-gray-400 text-xs'>
                        {userInfo[1].creation_time}
                    </li>
                    <li
                    className='
                    pr-4
                    text-white
                    w-[300px]
                    '
                    >
                        {userInfo[1].title}
                        <span className='text-gray-400'>を例えると</span>
                        {userInfo[1].shortParaphrase}
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
    </div>
  )
}
