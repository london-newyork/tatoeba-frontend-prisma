import React from 'react'
import { PencilAltIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

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
        border-gray-200
        fixed
        z-10'>
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
        <div className="flex my-auto mr-3 md:mr-0">
          <Link
          href="/Login">
            <div
            className='
            my-auto
            mr-3
            bg-gray-100
            rounded-full
            h-8
            w-8
            flex
            justify-center
            items-center
            text-xs
            text-gray-500
            cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </Link>
          <Link href="/Login/">
            <button className="
              hover:bg-mint_green
              bg-light_green
              rounded-full
              h-8
              w-8">
              <ul className="
              flex
              flex-col
              hover:text-white
              items-center">
                <li>
                  <PencilAltIcon
                  className="
                    h-4
                    w-4
                    text-q_dark_green
                    duration-300"/>
                </li>
              </ul>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
};
