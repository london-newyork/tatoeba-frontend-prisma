import React,{ useState } from 'react'
import { EditWordBtn } from './EditWordChild/EditWordBtn'
import { EditWordTitle } from './EditWordChild/EditWordTitle'
import { EditWordShortParaphrase } from './EditWordChild/EditWordShortParaphrase'
import { EditWordDescription } from './EditWordChild/EditWordDescription'

export const EditWordParent = () => {
    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase] = useState('')
    const [ description, setDescription ] = useState('')
    //JSON Placeholderでテストデータを引っ張ってくる　→ ユーザー管理の部分 → ユーザー管理専用ファイル作成

    return (
        <div className='flex flex-col gap-6'>
            <EditWordTitle
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
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
