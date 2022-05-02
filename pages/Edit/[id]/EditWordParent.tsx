import React,{ useEffect, useState } from 'react'
import { EditWordBtn } from './EditWordChild/EditWordBtn'
import { EditWordTitle } from './EditWordChild/EditWordTitle'
import { EditWordShortParaphrase } from './EditWordChild/EditWordShortParaphrase'
import { EditWordDescription } from './EditWordChild/EditWordDescription'
import { useRouter } from 'next/router'
import { Words } from '../../../src/components/types/types'
import { ParsedUrlQuery } from 'querystring'

export const EditWordParent = () => {
    //一覧からrouter　pushされたものを呼び出す
    const router = useRouter()
    const {t_id} = router.query

    const [title, setTitle] = useState<Words[] | ParsedUrlQuery[] | string | string[]>([])
    const [shortParaphrase, setShortParaphrase] = useState<Words[] | ParsedUrlQuery[] | string | string[]>([])
    const [description, setDescription] = useState<Words[] | ParsedUrlQuery[] | string | string[]>([])

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
                t_id={t_id}
                title={title}
                setTitle={setTitle}
            />
            <EditWordShortParaphrase
                shortParaphrase={shortParaphrase}
                setShortParaphrase={setShortParaphrase}
            />
            <EditWordDescription
                description={description}
                setDescription={setDescription}
            />
            <EditWordBtn
                t_id={t_id}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
