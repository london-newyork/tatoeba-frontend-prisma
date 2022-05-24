import Link from 'next/link'
import React, { VFC } from 'react'
import { Layouts } from '../types/types'

export const TatoeListWrapper:VFC<Layouts> = (props) => {
    return (
    <div
    className='
    pt-8
    sm:pt-0
    position'
    >
        <div>
            <h2
            className='
            text-md
            text-gray-600
            '
            >
                [投稿一覧]
            </h2>
        </div>
        {props.children}
    </div>
  )
}
