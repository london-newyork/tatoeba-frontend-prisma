import React,{ useState } from 'react'
import { RegisterWordCreateBtn } from './RegisterWordChild/RegisterWordCreateBtn'
import { RegisterWordTitle } from './RegisterWordChild/RegisterWordTitle'
import { RegisterWordShortParaphrase } from './RegisterWordChild/RegisterWordShortParaphrase'
import { RegisterWordDescription } from './RegisterWordChild/RegisterWordDescription'
import * as dayjs from 'dayjs';

export const RegisterWordParent = () => {
    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase] = useState('')
    const [ description, setDescription ] = useState('')
    const creation_time = dayjs().format('YYYY_MM_DD HH:mm A')

    return (
        <div className='flex flex-col gap-6'>
            <RegisterWordTitle
                title={title}
                setTitle={setTitle}
            />
            <RegisterWordShortParaphrase
                shortParaphrase={shortParaphrase}
                setShortParaphrase={setShortParaphrase}
            />
            <RegisterWordDescription
                description={description}
                setDescription={setDescription}
            />
            <RegisterWordCreateBtn
                creation_time={creation_time}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
