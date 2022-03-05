import React,{ useState } from 'react'
import { RegisterWordCreateBtn } from './RegisterWordChild/RegisterWordCreateBtn'
import { RegisterWordTitle } from './RegisterWordChild/RegisterWordTitle'
import { RegisterWordShortParaphrase } from './RegisterWordChild/RegisterWordShortParaphrase'
import { RegisterWordDescription } from './RegisterWordChild/RegisterWordDescription'

export const RegisterWordParent = () => {
    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase] = useState('')
    const [ description, setDescription ] = useState('')
    //JSON Placeholderでテストデータを引っ張ってくる　→ ユーザー管理の部分 → ユーザー管理専用ファイル作成

    return (
        <div className='flex flex-col gap-6'>
            <RegisterWordTitle title={title} setTitle={setTitle}/>
            <RegisterWordShortParaphrase shortParaphrase={shortParaphrase} setShortParaphrase={setShortParaphrase} />
            <RegisterWordDescription description={description} setDescription={setDescription} />
            <RegisterWordCreateBtn title={title} setTitle={setTitle} shortParaphrase={shortParaphrase} setShortParaphrase={setShortParaphrase} description={description} setDescription={setDescription} />
        </div>
  )
}
