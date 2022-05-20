import React, { VFC, useState, useCallback } from 'react';
import Image from 'next/image';
export const TopUpperContents:VFC = () => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [searchTerm]);
  return (
    <section
    className="
    px-6
    sm:px-6
    md:px-11
    lg:px-24
    flex
    flex-col
    md:flex-row
    gap-9
    md:gap-none
    justify-around
    border-b-2
    border-gray-800
    w-full">
    <div id="wrapper-left" className='order-2 sm:order-2 lg:order-1'>
        <h2 className="
            text-3xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            text-gray-600
            leading-normal
            sm:leading-normal
            md:leading-relaxed
            lg:leading-relaxed
            text-center
            md:text-left
            tracking-normal
            font-kakuGothic
            font-semibold">
            わかりにくい話に、<br />
            わかりやすい例えで<br />
            楽コミュニケーション
        </h2>
        <h3 className="
        pt-2
        text-gray-500
        lg:leading-relaxed
        text-center
        md:text-left">
            ITの専門用語を知らない人に、<br className='md:hidden'/>もっと伝わる「例え話」を<br />
        </h3>
            <div
                id="wrapper-left-bottom"
                className="
                flex
                flex-col
                pt-10
                pb-20">
                <div
                    className='
                    border-2
                    border-gray-800
                    w-[18rem]
                    mx-auto
                    md:mx-0
                    h-[48px]
                    px-6
                    bg-dark_green
                    text-gray-800
                    rounded-full
                    filter
                    drop-shadow-sm
                    '
                    >
                        <button
                            className={`
                            absolute
                            left-0
                            -top-[16px]
                            h-[44px]
                            w-[48px]
                            flex
                            justify-center
                            items-center
                            rounded-l-full
                            translate-y-4
                            bg-dark_green
                            pointer-events-none
                            `}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
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
                        {/* ${ searchTerm ? 'bg-[#04be01]' : 'bg-[#05D200]' } */}
                    </div>
                </div>

            </div>
            <div className="
                w-[25%]
                pl-none
                pt-5
                m-auto
                md:m-0
                lg:-ml-[96px]
                lg:max-w-[250px]
                lg:min-w-[240px]
                sm:min-w-[144px]
                order-1
                sm:order-1
                md:order-2
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
  )
}
