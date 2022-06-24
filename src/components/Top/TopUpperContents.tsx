import React, { VFC } from 'react';
import Image from 'next/image';
import { SearchBox } from './SearchBox';
export const TopUpperContents:VFC = () => {

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
                text-gray-700
                leading-normal
                sm:leading-normal
                md:leading-relaxed
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
            <SearchBox />
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
