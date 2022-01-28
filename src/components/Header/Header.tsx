import React from 'react';
import { MenuIcon, PencilAltIcon } from '@heroicons/react/outline'

type Props = {

}

export const Header = (props:Props) => {
  return (
    <header>
      <div className='bg-light_green w-full h-[60px] flex justify-between justify-items-center'>
        <div className="pl-10 my-auto">
          <img src="" />
          <h1 className="text-3xl text-gray-700 tracking-wider hover:opacity-50 duration-300">Tatoeba</h1>
        </div>
        <div className="flex gap-7 my-auto pr-10">
          <button className="hover:opacity-50">
            <ul className="flex flex-col items-center">
              <li><PencilAltIcon className="h-6 w-6 text-gray-700 duration-300"/></li>
              <li className="text-[10px] text-gray-600 duration-300">例え登録</li>
            </ul>
          </button>
          <button className="hover:opacity-50">
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
