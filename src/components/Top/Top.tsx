import React, { VFC, useEffect } from 'react';

import { TopUpperContents } from '../Top/TopUpperContents'

import type { Edit } from '../../components/types/types'
import { CardLayouts } from '../Layouts/CardLayouts';

export const Top:VFC<Edit> = (props) => {
    const { handleMoveToEdit, words, setWords, router } = props

    useEffect(() => {
    //router.queryをEditWordParentで状態管理させ、それをpropsでTopへ回すようリファクタする
        router.isReady
        ? setWords((prev)=> [router.query, ...prev])
        : null
    }, [])
  
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
      <CardLayouts
      words={words}
      handleMoveToEdit={handleMoveToEdit}
      handleMoveToResult={handleMoveToResult}/>
      </>
  )
};