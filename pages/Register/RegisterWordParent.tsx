import React,{ useState, VFC } from 'react'
import { RegisterWordCreateBtn } from './RegisterWordChild/RegisterWordCreateBtn'
import { RegisterWordTitle } from './RegisterWordChild/RegisterWordTitle'
import { RegisterWordShortParaphrase } from './RegisterWordChild/RegisterWordShortParaphrase'
import { RegisterWordDescription } from './RegisterWordChild/RegisterWordDescription'
import * as dayjs from 'dayjs';
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { WordsAtom } from '../../src/components/utils/atoms/WordsAtom'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../../src/components/types/types'

export const RegisterWordParent = (props) => {
    const { query } = props

    const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(WordsAtom)
    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase] = useState('')
    const [ description, setDescription ] = useState('')
    const creationTime = dayjs().format('YYYY_MM_DD HH:mm A')
    // const [prevTid, ] = useState(query.tId)
console.log("register word parent");

    return (
        <div className='flex flex-col gap-6'>
            <RegisterWordTitle
                words={words}
                setWords={setWords}
                query={query}
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
                // prevTid={prevTid}
                creationTime={creationTime}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
