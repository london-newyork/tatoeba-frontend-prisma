import Link from 'next/link'
import React, { VFC } from 'react'
import { Layouts } from '../../types/types'

export const TatoeListLayouts:VFC<Layouts> = (props) => {
  return (
    <div
    className='
    position
    relative
    lg:px-12
    px-7
    pt-4
    pb-10
    rounded-2xl
    mx-auto
    bg-white
    h-auto
    w-full
    border-[1px]
    border-gray-800
    shadow-plane_2xl
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
            w-10
            h-10
            bg-dark_green
            rounded-full'
            >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </Link>
        </div>
    </div>
    
  )
}
