import React, { VFC, useEffect } from 'react';

import { TopUpperContents } from '../Top/TopUpperContents'

import type { Edit } from '../../../pages/index'

export const Top:VFC<Edit> = (props) => {
    const { handleMoveToEdit, words, setWords, router } = props

    useEffect(() => {
    //useEffectの中ではsetStateに関数を渡し、第二引数を空にしたほうが余計なレンダリングがされない
    //router.queryをEditWordParentで状態管理させ、それをpropsでTopへ回すようリファクタする
            router.isReady
            ? setWords((prev)=>[router.query, ...prev])
            : null
    }, [])

    //handleMoveToEditはindex.tsxに書いた方がいい。ロジックは上位のコンポーネントへ書く。
    
    //handleMoveToEditはindex.tsxに書いた方がいい。
    const handleMoveToResult = (
        id: string,
        title: string,
        shortParaphrase: string,
        description: string
        ) => {

            words.forEach((query:any) => {
                if(query.id === id) {

                router.push({
                    pathname:'/SearchResult/[id]',
                    query: {
                        id,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
            } return query
        }
        )
    }

    return (
      <>
      <TopUpperContents />
        <section className='dark'>
            <div
            id="tatoeba-card"
            className='
            flex
            justify-center
            bg-gray-200
            dark:bg-black
            px-6
            sm:px-6
            md:px-11
            lg:px-24
            py-10
            sm:py-8
            md:py-10
            lg:py-10
            '>
                <ul
                className='
                lg:w-[940px]
                flex
                lg:justify-start
                sm:justify-center
                flex-wrap
                gap-x-8
                gap-y-8
                mt-4'>
                {words
                ? words.map((item:any) => (
                    <li
                    key={item.id}
                    className='
                    px-6
                    pt-6
                    pb-6
                    h-[336px]
                    w-[280px]
                    rounded-md
                    drop-shadow-2xl
                    bg-white
                    scss-card-toast
                    '
                    >
                        <ul
                        className='
                        h-[72px]
                        '>
                            <li>
                                <h3 className='
                                pl-1
                                text-left
                                text-dark_green
                                text-lg
                                '>
                                    {item.title}
                                    <br />
                                    <span className='text-gray-500'>
                                        を例えると...
                                    </span>
                                    {item.shortParaphrase}
                                </h3>
                            </li>
                        </ul>
                        <ul className='
                        pt-5
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                            {/* <li
                            className='
                            pt-2
                            pl-1
                            text-gray-400
                            '>
                                {item.description}
                            </li> */}
                            <li
                            className='
                            flex
                            justify-end
                            gap-x-2
                            '>
                                <button
                                className='
                                bg-gray-200
                                text-gray-500
                                text-sm
                                rounded-md
                                my-4
                                p-2
                                py-1
                                px-2
                                '
                                onClick={(e) => handleMoveToEdit(
                                    item.id,
                                    item.title,
                                    item.shortParaphrase,
                                    item.description,
                                )}
                                >
                                編集
                                </button>
                                <button
                                className='
                                my-4
                                p-2
                                text-sm
                                bg-light_green
                                text-q_dark_green
                                rounded
                                '
                                onClick={() => handleMoveToResult(
                                    item.id,
                                    item.title,
                                    item.shortParaphrase,
                                    item.description,
                                )}>
                                    詳細
                                </button>
                            </li>
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