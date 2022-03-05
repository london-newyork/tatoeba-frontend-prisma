import React, { VFC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TopUpperContents } from '../Top/TopUpperContents'

export const Top:VFC = () => {
    const router = useRouter();
    const [formQuery, setFormQuery]:any = useState([router.query])
    // const [formQuery, setFormQuery]:any = useState([])

    // const [title, setTitle ] = useState('')
    // const [shortParaphrase, setShortParaphrase ] = useState('')
    // const [description, setDescription] = useState('')
    const id = router.query.id //登録ページから今来たidをidに格納
    const title = router.query.title
    const shortParaphrase = router.query.shortParaphrase
    const description = router.query.description
    // const { id, title, shortParaphrase, description } = router.query

    //useEffectで再レンダリングが走らないようにする
    useEffect(() => {
        return () => {
            setFormQuery([
                //今までの例えが格納されているはず・・
                ...formQuery,{
                id,//登録ページから今来たid
                title,
                shortParaphrase,
                description
                }
            ])
        }
    }, [])

    console.log(formQuery) //formQuery.id だとundefined => idなどがちゃんとformQueryに収納されていない。
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
                {formQuery
                ? formQuery.map((query:any) => (
                    <li
                    key={query.id}
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
                        text-center'>{query.title}を例えると...{query.shortParaphrase}</h3>
                        <ul className='
                        pt-9
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                            <li>{query.description}</li>
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