import React,{ useEffect, useState } from 'react'
import { EditWordBtn } from './EditWordChild/EditWordBtn'
import { EditWordTitle } from './EditWordChild/EditWordTitle'
import { EditWordShortParaphrase } from './EditWordChild/EditWordShortParaphrase'
import { EditWordDescription } from './EditWordChild/EditWordDescription'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {RegisteredWordContents} from '../../../src/components/utils/RegisteredWordContents'

export const EditWordParent = () => {
    const router = useRouter()
    const { id } = router.query

    //atomからwords呼び出し
    const [ words, setWords ] = useRecoilState(RegisteredWordContents)

    console.log(id) //indexを入れないとid読み取れない

    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase ] = useState('')
    const [ description, setDescription ] = useState('')
            //その前に特定のidを入れてみて様子を見る

   useEffect(() => {

     return () => {

         const id = words[0].id
         const title = words[0].title
         const shortParaphrase =  words[0].shortParaphrase
         const description = words[0].description
         const newWords = [{
             id,
             title,
             shortParaphrase,
             description
         },
         ...words,
         ]
         setWords(newWords)
     }
   }, [])

        //一覧からのidとatomのidが合致したらatomをセットする
        //ただしwords[0].idのようにindexを指定しないと読み出せないので、indexをどう指定するのか

    return (
        <div className='flex flex-col gap-6'>
            <EditWordTitle
                title={words[0].title}
                setTitle={setTitle}
            />
            <EditWordShortParaphrase
                shortParaphrase={words[0].shortParaphrase}
                setShortParaphrase={setShortParaphrase}
            />
            <EditWordDescription
                description={words[0].description}
                setDescription={setDescription}
            />
            <EditWordBtn
                id={id}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
