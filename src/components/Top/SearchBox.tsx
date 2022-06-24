import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import { SearchBoxLayouts } from '../Layouts/SearchBoxLayouts';

export const SearchBox = () => {
    const [ keyWord, setKeyWord ] = useState('')
    const router = useRouter()
    const handleChange = useCallback((e) => {
        setKeyWord(e.target.value)
    }, [keyWord]);

    const handleClickSearch = useCallback(() => {

        router.push({

          pathname:"/SearchResult/SearchResultList/",
          query: {
           keyWord
          }
        })
      },[keyWord])

  return (
    <div>
        <SearchBoxLayouts>
            <input
                value={keyWord}
                onChange={handleChange}
                className="
                placeholder-darkGray_green
                h-[44px]
                items-center
                text-sm
                ring-0
                outline-none
                focus:ring-0
                border-dark_green
                text-white
                caret-gray-800
                pl-8
                bg-dark_green
                lg:max-w-[180px]
                lg:w-[inherit]
                "
                placeholder='サーバーを例えると...' />
                <button
                    className="
                    absolute
                    right-3
                    -top-[14px]
                    h-[42px]
                    w-[42px]
                    flex
                    justify-center
                    items-center
                    rounded-r-full
                    translate-y-4
                    bg-dark_green
                    transition
                    duration-200
                    ease-in
                    tracking-wide
                    text-sm
                    text-gray-800
                    "
                    onClick={handleClickSearch}
                >
                    <span
                    className='
                    h-8
                    w-[1px]
                    bg-gray-800
                    mr-3'>
                    </span>
                    検索
                </button>
            </SearchBoxLayouts>
    </div>
  )
}
