import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SearchBoxLayouts } from '../Layouts/SearchBoxLayouts';
import { WordsAtom } from '../utils/atoms/WordsAtom';

export const SearchBox = () => {
    const [ keyWord, setKeyWord ] = useState('')
    const [words, setWords] = useRecoilState(WordsAtom)
    const router = useRouter()
    const handleChange = useCallback((e) => {
        setKeyWord(e.target.value)
    }, [keyWord]);

    //小文字化と空白文字以外の任意の一文字以上連続ヒット
    const searchTerm = keyWord.trim().toLowerCase().match(/[^\s]+/g)
    const prepareWords = JSON.stringify(words)
    console.log("prepareWords",prepareWords);

    const handleClickSearch = useCallback(()=>{
        if(keyWord){
            const filteredWords = [prepareWords].filter(item => {
                //検索条件に部分一致するものを返す
                searchTerm.every(text => item.toLowerCase().indexOf(text) !== -1)
            })
            //配列の文字列化
            const stringifiedWords = filteredWords.toString()

            router.push({
                pathname:'/SearchResult/SearchResultList/',
                query: {
                    stringifiedWords
                }
            })
            console.log("stringifiedWords",stringifiedWords);
        }
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
