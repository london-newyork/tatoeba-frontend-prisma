import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SearchBoxLayouts } from '../Layouts/SearchBoxLayouts';
import { WordsAtom } from '../utils/atoms/WordsAtom';

export const SearchBox = () => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const [words, setWords] = useRecoilState(WordsAtom)
    const router = useRouter()
    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [searchTerm]);

    const handleClickSearch = useCallback(()=>{
        if(searchTerm){
            const filteredWords = [words].filter((text)=>{
                return text === searchTerm
            })
            router.push({
                pathname:'/SearchResult/SearchResultList/',
                query: {
                    filteredWords
                }
            })
            console.log("search button is clicked");
        }
    },[searchTerm])

  return (
    <div>
        <SearchBoxLayouts>
            <input
                value={searchTerm}
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
                    className={`
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
                    `}
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
