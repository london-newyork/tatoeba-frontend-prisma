import React, { useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import { Header } from '../../../src/components/Header/Header';
import { SearchMain } from '../../../src/components/Layouts/SearchMain'
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from 'recoil'
import { RegisteredWordContents } from '../../../src/components/utils/RegisteredWordContents'
import { Loading } from '../../../src/components/utils/Loading/Loading'

export default function Detail () {

  const router = useRouter()
  const { id, title, shortParaphrase, description } = router.query

  // const [ prevTitle, setPrevTitle ] = useState(title)
  // console.log(prevTitle) //undefined

  //useStateでtitleを管理したいがpropsで渡ってきたtitleにuseStateすると重複してしまいエラー
  //重複をしないでtitleを書き換えるには？

  // const isReady = router.isReady

  // if (!isReady) {
  //   return <Loading />
  // }

  // const posts: null | string[] = []

  // if (!posts) {
  //   router.push('/404')
  //   return null
  // }

  // useEffect(() => {
  //   return () => {
  //     setWords([...words,{
  //       id, title, shortParaphrase, description
  //     }])
  //   }
  // }, [words])

  const handleChangeTitle = (e) => {

    // setEditTitle(editTitle=>[
    //   ...editTitle,
    //   e.target.value
    // ])
    console.log(title)

    // setWords((title)=> [
    //   ...title,
    //   e.target.value
    // ])

    // setPrevTitle((prevTitle)=>[
    //   ...prevTitle,
    //   e.target.value
    // ])

    //atomに登録しなおす
    // setWords([prevTitle])
    //   console.log(prevTitle);
    //[配列]に入っていて、初回登録時の文字 + 一文字ずつ配列の中に収まっている。
    //abcと登録してあったら、このページで'd'と打てば abcd、次に'e'と打てばabce
  }
  // console.log(title)
  //初回登録時と同じ値abcになってしまう。
  //title自体が変更されない

  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
       <SearchMain>
          <div>
            <div
            className='flex flex-col'
            >
               <small
               className="text-gray-400"
               >
                 検索結果
               </small>
               {/* <p
               className='
               pt-2
               text-sm
               text-gray-300
               '
               >ID: {id}</p> */}
               <div
               className='
               flex
               relative
               '
               >
                  <h1 className="
                  text-4xl
                  text-gray-700
                  pt-6
                  ">
                    <input
                    value={title}
                    onChange={()=>handleChangeTitle}
                    />
                    をわかりやすく例えると...
                  </h1>
                  <div
                  className='
                  absolute
                  right-0
                  top-[45%]
                  '
                  >
                    <button
                    className='
                    bg-gray-200
                    text-gray-600
                    text-sm
                    rounded-md
                    py-1
                    px-2
                    '
                    >
                      編集
                    </button>
                  </div>
               </div>
            </div>
            <h2 className="pt-16 text-2xl text-gray-600">
              {shortParaphrase}
            </h2>
            <p className="
            pt-10
            text-md
            leading-loose
            text-gray-600">
              {description}
            </p>
          </div>
        </SearchMain>
      </>
  )
};
