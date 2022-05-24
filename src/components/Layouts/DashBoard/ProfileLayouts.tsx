import React, { VFC } from 'react'
import { Layouts } from '../../types/types'

export const ProfileLayouts:VFC<Layouts> = (props) => {
  return (
    <div
    className='
    bg-white
    lg:px-12
    px-7
    pt-12
    pb-10
    rounded-2xl
    border-[1px]
    border-gray-800
    shadow-plane_2xl
    mx-auto
    h-auto
    w-full
    sm:w-full
    lg:w-auto
    '
    >
      {props.children}
    </div>
  )
}
