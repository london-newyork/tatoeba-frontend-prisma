import Image from 'next/image'
import React from 'react'

export const Avatar = () => {
  return (
    <div>
        <div
            className='
            h-[100px]
            w-[100px]
            '
            >
                <Image
                  src="/images/women3.jpg"
                  alt="ユーザーの画像"
                  width={200}
                  height={200}
                  className="
                  rounded-full
                  object-cover"
                />
        </div>
    </div>
  )
}
