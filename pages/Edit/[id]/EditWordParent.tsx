import React,{ useEffect, useState } from 'react'
import { EditWordBtn } from './EditWordChild/EditWordBtn'
import { EditWordTitle } from './EditWordChild/EditWordTitle'
import { EditWordShortParaphrase } from './EditWordChild/EditWordShortParaphrase'
import { EditWordDescription } from './EditWordChild/EditWordDescription'
import { useRouter } from 'next/router'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {RegisteredWordContents} from '../../../src/components/utils/RegisteredWordContents'

export const EditWordParent = () => {
    //一覧からrouter　pushされたものを呼び出す
    const router = useRouter()
    const {id} = router.query

    const [title, setTitle] = useState('')
    const [shortParaphrase, setShortParaphrase] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
      if(router.isReady){
          setTitle(router.query.title)
          setShortParaphrase(router.query.shortParaphrase)
          setDescription(router.query.description)
      }
    }, [router.isReady, router.query])

    return (
        <div className='flex flex-col gap-6'>
            <EditWordTitle
                id={id}
                title={title}
                setTitle={setTitle}
            />
            <EditWordShortParaphrase
                shortParaphrase={shortParaphrase}
                // setShortParaphrase={setShortParaphrase}
            />
            <EditWordDescription
                description={description}
                // setDescription={setDescription}
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
