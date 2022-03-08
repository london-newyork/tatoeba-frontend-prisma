import React, { VFC, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { TopUpperContents } from '../Top/TopUpperContents'
import { RegisteredWordContents } from '../utils/RegisteredWordContents'
import { useRecoilState } from 'recoil'

export const Top:VFC = () => {
    const router = useRouter();
    // const [routerQuery, setRouterQuery] = useState([router.query])
    const [routerQuery, setRouterQuery] = useRecoilState(RegisteredWordContents)

    const renderFlgRef = useRef(true)
    //useEffectで再レンダリングが走らないようにする
    useEffect(() => {
        //useRefを使って、useEffectがrouterQueryを監視中に、２回レンダリングが走らないようにする。
        if(renderFlgRef.current) {
            renderFlgRef.current = false
            console.log(router.query);
            // console.log(typeof router.query);

            // 空のカードや配列が入ってくるのでrouter.queryが空の時(true)の条件分岐を書こうとした。
            //ただし、オブジェクトとオブジェクトを比べてもfalseになる。
            // console.log({} === {}); false
            // console.log(router.query === {}); false

            // router.query.id === undefined　=> またはこのような比べ方もあり
            // idがrouter.queryにあるかどうかを比べて、あればsetRouterQueryを返す
            'id' in router.query
            ? setRouterQuery([router.query, ...routerQuery])
            : null

        } return
    }, [routerQuery])

    const handleMoveToResult = (id: string, title: string, shortParaphrase: string, description: string) => {
        const copiedRouterQuery = routerQuery.map( query => ({...query}))
        const newRouterQuery = copiedRouterQuery.map(query => {
            if(query.id === id) {
                console.log('queryidだよ',query.id);
                console.log('idだよ',id);
                console.log(title);

                router.push({
                    pathname:'/SearchResult/',
                    query: {
                        id,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
            }
        }
        )
        setRouterQuery(newRouterQuery)
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
                {routerQuery
                ? routerQuery.map((item) => (
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
                            '>
                                <button
                                className='
                                my-4
                                p-2
                                bg-light_green
                                text-q_dark_green
                                rounded
                                '
                                onClick={(e)=>handleMoveToResult(item.id, item.title, item.shortParaphrase, item.description)}>詳細</button>
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