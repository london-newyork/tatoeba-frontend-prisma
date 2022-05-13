import React, { VFC } from 'react'
import { Layouts } from '../../types/types'

export const RemoveMemberLayouts:VFC<Layouts> = (props) => {
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
    w-auto
    flex-col
    text-center
    justify-center
    items-center
    '
    >
      {props.children}
    </div>
  )
}
