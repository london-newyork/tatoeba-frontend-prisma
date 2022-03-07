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
            console.log(typeof router.query);

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

    return (
      <>
      <TopUpperContents />
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
                className='
                flex
                justify-center
                flex-wrap
                gap-x-6
                gap-y-8
                mt-4'>
                {routerQuery
                ? routerQuery.map((item:any) => (
                    <li
                    key={item.id}
                    className='
                    px-6
                    py-10
                    h-[300px]
                    w-[280px]
                    rounded-md
                    drop-shadow-2xl
                    bg-white
                    scss-card-toast
                    '>
                        <h3 className='
                        text-lg
                        text-center'>{item.title}を例えると...{item.shortParaphrase}</h3>
                        <ul className='
                        pt-9
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                            <li>{item.description}</li>
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