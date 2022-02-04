import React from 'react';
import { MenuIcon, PencilAltIcon } from '@heroicons/react/outline'
import Link from 'next/link'

type Props = {

}

export const Header = (props:Props) => {
  return (
    <header>
      <div className='
        px-6
        sm:px-6
        md:px-11
        lg:px-24
        bg-white
        w-full
        h-[60px]
        flex
        justify-between
        justify-items-center
        border-b
        border-gray-100'>
        <div className="my-auto">
          <Link href="/">
            <a className="
            text-3xl
            text-gray-700
            tracking-wider
            hover:opacity-50
            duration-300">
              <span className="text-green-500">T</span>atoeba
            </a>
          </Link>
        </div>
        <div className="flex my-auto">
          <Link href="/Register/">
            <button className="
              hover:opacity-50
              bg-dark_green
              w-[64px]
              h-[60px]">
              <ul className="
              flex
              flex-col
              items-center">
                <li><PencilAltIcon className="h-6 w-6 text-white duration-300"/></li>
                <li className="text-[10px] text-white duration-300">例え登録</li>
              </ul>
            </button>
          </Link>
          <button className="
          bg-gray-200
          w-[64px]
          h-[60px]
          hover:opacity-70">
            <ul className="flex flex-col items-center">
              <li><MenuIcon className="h-6 w-6 text-gray-700 duration-300"/></li>
              <li className="text-[10px] text-gray-700 duration-300">メニュー</li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  )
};
