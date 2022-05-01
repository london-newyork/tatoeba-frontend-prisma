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
    rounded-md
    mx-auto
    h-auto
    sm:w-full
    lg:w-auto
    '
    >
      {props.children}
    </div>
  )
}
