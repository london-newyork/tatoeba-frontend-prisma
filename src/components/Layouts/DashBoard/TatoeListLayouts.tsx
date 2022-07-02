import Link from 'next/link'
import React, { VFC } from 'react'
import { Layouts } from '../../types/types'

export const TatoeListLayouts:VFC<Layouts> = (props) => {
  return (
    <div
    className='
    bg-white
    lg:px-12
    px-7
    sm:pt-12
    pb-20
    rounded-2xl
    border
    border-gray-800
    shadow-plane_2xl
    mx-auto
    h-auto
    w-full
    sm:w-full
    lg:w-auto
    position
    relative
    '
    >
      {props.children}
      <div
        className='
        absolute
        bottom-8
        right-8
        '
        >
        <Link
            href="/Register"
            >
            <button
            type='button'
            className='
            w-9
            h-9
            bg-dark_green
            rounded-full'
            >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </Link>
        </div>
    </div>
    
  )
}
