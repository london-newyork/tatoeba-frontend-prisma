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
                py-10">
                <div
                    className='
                    lg:w-[470px]
                    md:w-[50%]
                    sm:w-[80%]
                    sm:mx-auto
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
                            bg-faded_light_green
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
                            outline-none
                            pt-3
                            pl-8
                            lg:max-w-[352px]
                            lg:w-[inherit]
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
                            hover:text-white
                            transition
                            duration-200
                            ease-in
                            tracking-wide
                            text-white
                            ${ searchTerm ? 'bg-[#04be01]' : 'bg-[#05D200]' }
                            `}
                        >
                            検索
                        </button>
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
  )
}
