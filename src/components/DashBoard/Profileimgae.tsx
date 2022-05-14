import Image from 'next/image'
import React from 'react'

export const Profileimgae = () => {
  return (
    <div>
        <div
            className='
            h-[100px]
            w-[100px]
            '
            >
              {/* 画像変更できるようにする */}
              <button
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
              </button>
        </div>
    </div>
  )
}
