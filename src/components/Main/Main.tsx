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
        <section className="flex flex-col lg:flex-row gap-9 lg:gap-20 w-full">
            <div id="wrapper-left" className='order-2 sm:order-2 lg:order-1'>
                <h2 className="
                    text-3xl
                    sm:text-3xl
                    lg:text-[40px]
                    text-gray-700
                    leading-normal
                    sm:leading-normal
                    lg:leading-loose
                    text-center
                    md:text-left
                    tracking-normal">
                    わかりにくい話に、<br />
                    わかりやすい例えで<br />
                    楽コミュニケーション
                </h2>
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
                        rounded">
                        <h3 className="text-2xl text-gray-700 pb-5">困っているお仕事</h3>
                        <ul className="leading-loose">
                            <li><a className="hover:opacity-50">WEBデザイナー</a></li>
                            <li><a className="hover:opacity-50">WEBエンジニア</a></li>
                            <li><a className="hover:opacity-50">WEBマーケター</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="
                order-1
                sm:order-1
                md:order-1
                lg:order-2
                w-[50%]
                lg:w-[60%]
                m-auto
                md:m-none
                ">
                <Image src='/images/illust1.png'
                    alt="illust of Tatoeba app"
                    width={600}
                    height={600}
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
