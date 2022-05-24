import React,{ useState } from 'react'
import { RegisterWordCreateBtn } from './RegisterWordChild/RegisterWordCreateBtn'
import { RegisterWordTitle } from './RegisterWordChild/RegisterWordTitle'
import { RegisterWordShortParaphrase } from './RegisterWordChild/RegisterWordShortParaphrase'
import { RegisterWordDescription } from './RegisterWordChild/RegisterWordDescription'
import * as dayjs from 'dayjs';
import { RegisterWordCancelBtn } from './RegisterWordChild/RegisterWordCancelBtn'

export const RegisterWordParent = (props) => {
    //router pushでTatoeListでクリックされたリストのprops tIdなどがqueryとなり入ってくる
    const { query } = props

    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase] = useState('')
    const [ description, setDescription ] = useState('')
    const creationTime = dayjs().format('YY/MM/DD HH:mm A')

    return (
        <div className='flex flex-col gap-6'>
            <RegisterWordTitle
                query={query}
                title={title}
                setTitle={setTitle}
            />
            <RegisterWordShortParaphrase
                query={query}
                shortParaphrase={shortParaphrase}
                setShortParaphrase={setShortParaphrase}
            />
            <RegisterWordDescription
                query={query}
                description={description}
                setDescription={setDescription}
            />
            <RegisterWordCancelBtn
                query_tId={query.tId}
                creationTime={creationTime}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
            <RegisterWordCreateBtn
                query_tId={query.tId}
                creationTime={creationTime}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
