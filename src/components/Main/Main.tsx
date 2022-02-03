import React from 'react';
import Image from 'next/image'
export const Main = () => {
  return (
    <main className="
        px-6
        sm:px-6
        md:px-11
        lg:px-24
        h-screen
        pt-10
        sm:pt-10
        md:pt-12
        lg:pt-16
        bg-gray-100
        ">
        <section
        className="
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
                    tracking-normal">
                    わかりにくい話に、<br />
                    わかりやすい例えで<br />
                    楽コミュニケーション
                </h2>
                <h3 className="pt-3 text-gray-500 lg:leading-relaxed">ITの専門用語を知らない人に、もっと伝わる「例え話」を<br />
                </h3>
                <div
                    id="wrapper-left-bottom"
                    className="flex flex-col">
                    <div
                        id="scss-wrapper-input"
                        className="
                        pt-8
                        pb-20
                        ">
                        <input
                            className="
                            scss-border
                            "
                            placeholder='サーバーを例えると...' />
                        <button
                            className="
                            absolute
                            right-0
                            translate-y-4
                            text-gray-400
                            hover:opacity-60
                            hover:text-dark_green
                        ">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <div
                        className="
                        max-w-[500px]
                        pt-9
                        px-9
                        pb-10
                        bg-white
                        rounded-md">
                        <h3 className="scss-underline text-2xl text-gray-700">困っているお仕事</h3>
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
                    </div>
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
    </main>
  )
};
