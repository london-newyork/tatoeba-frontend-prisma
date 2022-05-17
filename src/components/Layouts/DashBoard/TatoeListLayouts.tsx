import React, { VFC } from 'react'
import { Layouts } from '../../types/types'

export const TatoeListLayouts:VFC<Layouts> = (props) => {
  return (
    <div
    className='
    position
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
    </div>
    
  )
}
