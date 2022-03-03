import Image from 'next/image';
import React, { VFC, useState, useCallback } from 'react';
import { NextRouter } from 'next/router';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { RegisteredWordContents } from '../utils/RegisteredWordContents';

export const Top:VFC = () => {
const [ searchTerm, setSearchTerm ] = useState('')
// @ts-ignore
const [ formItems, setFormItems ] = useRecoilState(RegisteredWordContents)

function getUniqueId(){
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
}

const handleCreateVal = useCallback((e) => {
    console.log(e.target.value);
    setFormItems(() => [
        ...formItems,
        {
            id : getUniqueId(),
            //handleChangeのあるinputやtextareaからまとめて値を取りたい。
            [e.target.name] : e.target.value,
            // complicated_story : '',
            // short_paraphrase : '',
            // detail : '',
        }
    ])
},[formItems])

console.log(formItems);

const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value)
}, [searchTerm]);

// const [ isScroll, setIsScroll ] = useState(false)
// const [ scrollTop, setScrollTop ] = useState(0)

// const handleScrollChange = useCallback((e) => {
//     const node = React.createRef()
//     setScrollTop({
//         scrollTop: node.scrollTop
//     })
// }, 200)

// const handleToastStop = useCallback(() => {
//     setIsScroll(true)
// },[isScroll])

  return (
      <>
       <section
        className="
        px-6
        sm:px-6
        md:px-11
        lg:px-24
        pt-10
        sm:pt-8
        md:pt-10
        lg:pt-13
        flex
        flex-col
        lg:flex-row
        gap-9
        md:gap-none
        justify-around
        w-full">
            <div id="wrapper-left" className='order-2 sm:order-2 lg:order-1'>
                <h2 className="
                    text-3xl
                    sm:text-3xl
                    lg:text-5xl
                    text-gray-700
                    leading-normal
                    sm:leading-normal
                    lg:leading-relaxed
                    text-center
                    md:text-left
                    tracking-normal
                    font-top_headline">
                    わかりにくい話に、<br />
                    わかりやすい例えで<br />
                    楽コミュニケーション
                </h2>
                <h3 className="
                pt-3
                text-gray-500
                lg:leading-relaxed
                text-center
                md:text-left">
                    ITの専門用語を知らない人に、もっと伝わる「例え話」を<br />
                </h3>
                <div
                    id="wrapper-left-bottom"
                    className="flex flex-col py-5">
                    <div
                        id="scss-wrapper-input"
                        className="
                        relative
                        py-8
                        px-7
                        bg-gray-50
                        rounded-md
                        filter
                        drop-shadow-2xl
                        ">
                            <div
                            className='
                            w-[420px]
                            h-[48px]
                            px-6
                            bg-white
                            rounded-md
                            filter
                            drop-shadow-xl
                            '
                            >
                                <button
                                    className={`
                                    absolute
                                    left-0
                                    -top-4
                                    h-[48px]
                                    w-[36px]
                                    flex
                                    justify-center
                                    items-center
                                    rounded-r-none
                                    rounded-l-md
                                    translate-y-4
                                    bg-[#dbf7db]
                                    text-[#05D200]
                                    `}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                                <input
                                    value={searchTerm}
                                    onChange={handleChange}
                                    className="
                                    placeholder-gray-300
                                    scss-border
                                    "
                                    placeholder='サーバーを例えると...' />
                                <button
                                    className={`
                                    absolute
                                    right-0
                                    -top-4
                                    h-[48px]
                                    w-[64px]
                                    flex
                                    justify-center
                                    items-center
                                    rounded-l-none
                                    rounded-r-md
                                    translate-y-4
                                    hover:bg-dark_green
                                    hover:text-dark_green
                                    transition
                                    duration-200
                                    ease-in
                                    tracking-wide
                                    text-white
                                    ${ searchTerm ? 'bg-[#05D200]' : 'bg-[#77e476]' }
                                    `}
                                >
                                    検索
                                </button>

                            </div>

                        {/*
                        ✨ firebaseに登録されたデータを 「　filter　」で検索

                        {firebaseDATA.filter((val)=> {
                            searchTerm === "" ? val : 検索された時の処理
                        })}

                        😀 useFormを使う必要がある？

                        ✨ useRouterを使ってページ遷移する必要がある？

                          const onSubmit: SubmitHandler<SearchForm> = (data) => {
                            router.push({
                            pathname: '/SearchResult/',
                            query: { keyword: data.keyword, type: data.type }, → 型設定する必要
                            });
                        };

                        */}

                    </div>

                    {/* <div
                        className="
                        max-w-[500px]
                        pt-9
                        px-9
                        pb-10
                        bg-white
                        rounded-md">
                        <h3 className="scss-underline text-2xl text-mid_green">困っているお仕事</h3>
                        <ul className="leading-loose pt-7">
                            <li className="flex gap-2 items-center hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                <a>WEBデザイナー</a>
                            </li>
                            <li className="flex gap-2 items-center hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                <a>WEBエンジニア</a>
                            </li>
                            <li className="flex gap-2 items-center hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                                <a>WEBマーケター</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="
                w-[30%]
                pl-none
                pt-5
                m-auto
                md:m-0
                lg:m-0
                max-w-[340px]
                order-1
                sm:order-1
                md:order-1
                lg:order-2
                ">
                <Image src='/images/illust1.png'
                    alt="illust of Tatoeba app"
                    width={472}
                    height={640}
                    objectFit='contain'
                    quality={50}
                    priority={true}
                    className="
                        pt-12"/>

            </div>
        </section>
        <section className='dark'>
            <div
            id="tatoeba-card"
            className='
            bg-gray-200
            dark:bg-black
            px-6
            sm:px-6
            md:px-11
            lg:px-24
            pt-10
            sm:pt-8
            md:pt-10
            lg:pt-13'>
                <ul
                // onScroll={handleToastStop}
                // ref={node}
                className='
                flex
                justify-center
                flex-wrap
                gap-x-6
                gap-y-8
                mt-4'>
                {formItems
                //@ts-ignore
                ? formItems.map((formItem) => (
                    <li
                    key={formItem.id}
                    className='
                    px-6
                    py-10
                    h-[300px]
                    w-[280px]
                    rounded-md
                    drop-shadow-2xl
                    bg-white
                    scss-card-toast
                    '
                    >
                        <h3 className='
                        text-lg
                        text-center'>{formItem.complicated_story}を例えると...{formItem.short_paraphrase} </h3>
                        <ul className='
                        pt-9
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                            <li>{formItem.detail}</li>
                        </ul>
                    </li>
                )
            ): undefined }
            </ul>
            </div>
        </section>
      </>
  )
};
