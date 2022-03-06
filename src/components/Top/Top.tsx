import React, { VFC, useState, useEffect, useRef, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { TopUpperContents } from '../Top/TopUpperContents'
import { ParsedUrlQuery } from 'node:querystring'

export const Top:VFC = () => {
    const router = useRouter();
    const [routerQuery, setRouterQuery] = useState([router.query])

    // const [title, setTitle ] = useState('')
    // const [shortParaphrase, setShortParaphrase ] = useState('')
    // const [description, setDescription] = useState('')

    // const id = router.query.id //登録ページから今来たidをidに格納
    // const title = router.query.title
    // const shortParaphrase = router.query.shortParaphrase
    // const description = router.query.description

    //登録ページから来た内容を変数へ代入
    const { id, title, shortParaphrase, description } = router.query

    const renderFlgRef = useRef(false)
    //useEffectで再レンダリングが走らないようにする
    useEffect(() => {
        //useRefを使って、useEffectがformQueryを監視中に、２回レンダリングが走らないようにする。
        if(renderFlgRef.current) {

            //登録ページからのidと、formQueryに格納されたidが同じかどうか判定するためにidをmapで取り出す
            // const newRouterQuery =
            // routerQuery.map((query:any)=> {
            //     return query.id
            // })

            //登録ページからのidと、formQueryに格納されたidが同じかどうか判定
            // id === newRouterQuery
            // ? setRouterQuery(prevRouterQuery => {
            //     const newRouterQuery =
            //     //今までの例えが格納されているはず・・
            //     [ ...prevRouterQuery, { 'a':'aaa' }]
            //     return newRouterQuery
            // })
            // : null

            //登録ページからのidと、formQueryに格納されたidが同じかどうか判定

            setRouterQuery(prevRouterQuery => {
                const newRouterQuery =
                //今までの例えが格納されているはず・・
                [ ...prevRouterQuery, { id, title, shortParaphrase, description }]
                return newRouterQuery
            })

        } else {
            renderFlgRef.current = true
        }
    }, [routerQuery])

    console.log(routerQuery)
    //[{...}]//オブジェクトに値は入ってるが、もう一度違うものを登録してみるとまた別の配列に入っている。

    //[{...}]
    //[{...}]
    //[{...}]

    // [{0:id...  1:id... 2:id...}] <=こういう状態にしたい。

/////////////////////////////////////////////////

// => firebaseにデータを入れてしまうので、Recoilも状態管理も関係ない。

/////////////////////////////////////////////////

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