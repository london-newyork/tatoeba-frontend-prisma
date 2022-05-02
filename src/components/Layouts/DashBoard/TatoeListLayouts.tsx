import React, { VFC } from 'react'
import { Layouts } from '../../types/types'

export const TatoeListLayouts:VFC<Layouts> = (props) => {
  return (
    <div
    className='
    lg:px-12
    px-7
    pt-4
    pb-10
    rounded-md
    mx-auto
    bg-gray-500
    h-auto
    w-full
    '
    >
      {props.children}
    </div>
  )
}
