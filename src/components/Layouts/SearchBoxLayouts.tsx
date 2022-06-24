import React, { VFC } from 'react'
import type { Layouts } from '../types/types'

export const SearchBoxLayouts:VFC<Layouts> = (props:any) => {
  return (
    <div>
         <div
            className="
            flex
            flex-col
            pt-10
            pb-20">
            <div
                className='
                border-2
                border-gray-800
                w-[18rem]
                mx-auto
                md:mx-0
                h-[48px]
                px-6
                bg-dark_green
                text-gray-800
                rounded-full
                filter
                drop-shadow-sm
                '
                >
                    <div
                        className="
                        absolute
                        left-0
                        -top-[16px]
                        h-[44px]
                        w-[48px]
                        flex
                        justify-center
                        items-center
                        rounded-l-full
                        translate-y-4
                        bg-dark_green
                        pointer-events-none
                        "
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    {props.children}
            </div>
        </div>
    </div>
  )
}
