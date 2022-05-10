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

    // const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(WordsAtom)
    const [ title, setTitle ] = useState('')
    const [ shortParaphrase, setShortParaphrase] = useState('')
    const [ description, setDescription ] = useState('')
    const creationTime = dayjs().format('YYYY_MM_DD HH:mm A')

    console.log("RegisterWordParent props", props);//props=query
    //直前のタイトルを引き継いだ別々のtIdが生成されて、propsには1個のリストのqueryのみが入っている。
    // {tId:001  title:222 } {tId:002  title:111}
    // {tId:002  title:111}のリストをクリック
    //propsの中身　query：{tId:002  title:222}
    console.log("RegisterWordParent props.tId",props.tId);
    //undefined
    console.log("parent title",title);
    
    return (
        <div className='flex flex-col gap-6'>
            <RegisterWordTitle
                // tId={props.tId}
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
            <RegisterWordCreateBtn
                creationTime={creationTime}
                title={title}
                shortParaphrase={shortParaphrase}
                description={description}
            />
        </div>
  )
}
