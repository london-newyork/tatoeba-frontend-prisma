import React from 'react'
import { PencilAltIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'

type Props = {

}

export const Header = (props:Props) => {
  return (
    <header>
      <div className='
        pl-6
        pr-0
        sm:pl-6
        sm:pr-0
        md:px-11
        lg:px-24
        bg-white
        w-full
        h-[60px]
        flex
        justify-between
        justify-items-center
        border-b
        border-gray-200'>
        <div className="my-auto">
          <Link href="/">
            <a className="
            text-3xl
            text-gray-700
            tracking-wider
            hover:opacity-50
            duration-300">
              <span className="text-dark_green">
                T
              </span>
              atoeba
            </a>
          </Link>
        </div>
        <div className="flex my-auto">
          <Link
          href="/Login">
            <div
            className='
            my-auto
            mr-4
            bg-gray-100
            rounded-full
            h-10
            w-10
            flex
            justify-center
            items-center
            text-xs
            cursor-pointer'>
            ログイン
            </div>
          </Link>
          <Link href="/Register/">
            <button className="
              hover:bg-mint_green
              bg-light_green
              w-[64px]
              h-[59px]">
              <ul className="
              flex
              flex-col
              hover:text-white
              items-center">
                <li>
                  <PencilAltIcon
                  className="
                    h-6
                    w-6
                    text-q_dark_green
                    duration-300"/>
                </li>
                <li
                  className="
                  text-[10px]
                  text-q_dark_green
                  duration-300">
                    例え登録
                </li>
              </ul>
            </button>
          </Link>
          <button className="
          bg-gray-200
          hover:bg-gray-300
          w-[64px]
          h-[59px]
          hover:opacity-80">
            <ul className="flex flex-col items-center">
              <li>
                <MenuIcon
                className="
                  h-6
                  w-6
                  text-q_dark_green
                  duration-300"/>
              </li>
              <li
              className="
              text-[10px]
              text-q_dark_green
              duration-300">
                メニュー
              </li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  )
};
