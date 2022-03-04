import React,{ useState } from 'react'
import { RegisterWordCreateBtn } from './RegisterWordCreateBtn'
import { RegisterWordTitle } from './RegisterWordChild/RegisterWordTitle'
import { RegisterWordShortParaphrase } from './RegisterWordChild/RegisterWordShortParaphrase'
import { RegisterWordDescription } from './RegisterWordChild/RegisterWordDescription'

export const RegisterWordParent = () => {
    const [ title, setTitle ] = useState('')
    //JSON Placeholderでテストデータを引っ張ってくる　→ ユーザー管理の部分 → ユーザー管理専用ファイル作成

    return (
        <div className='flex flex-col gap-6'>
            <RegisterWordTitle title={title} setTitle={setTitle}/>
            <RegisterWordShortParaphrase />
            <RegisterWordDescription />
            <RegisterWordCreateBtn title={title} setTitle={setTitle}/>
        </div>
  )
}
