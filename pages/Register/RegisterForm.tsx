import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { RegisterCreateBtn } from './RegisterCreateBtn'

export const RegisterForm = () => {
    const router = useRouter()
    const [ formContents, setFormContents ] = useState({
        complicated_story: '',
        short_paraphrase: '',
        detail: '',
    })

    //エラーメッセージ
    const [ errMessage, setErrMessage ] = useState({
        type: '',
        message: '',
    })

    const handleChange = useCallback((e) => {
        setFormContents({
            ...formContents,
           [e.target.name] : e.target.value
        })
    },[])

    console.log(formContents);

    const handleSubmit = useCallback((e)=> {
        e.preventDefault()

        try {
            fetch('/Register',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({setFormContents})
            }).then(res => {
                if(res.ok) router.push('/')
            })
        } catch (error) {
            setErrMessage({
                ...errMessage,
                type: '',
                message: 'エラー',
            })
        }
    },[])

    return (
        <div>
        <form
            method="post"
            onSubmit={handleSubmit}
            className="pt-10 flex flex-col gap-8">
            <div
                className="
                flex
                justify-between
                flex-col
                lg:flex-row">
                <label className='
                text-gray-500
                w-[300px]
                pb-2
                md:pb-2
                lg:pb-0
                select-none'>
                わかりにくい専門用語・文章<br />
                    <span className="text-xs text-gray-400">50文字以内</span>
                </label>
                <textarea
                value={formContents.complicated_story}
                name='complicated_story'
                onChange={handleChange}
                rows={2}
                placeholder='サーバー'
                maxLength={50}
                className="
                max-w-[650px]
                shadow-sm
                outline-none
                focus:ring-2
                focus:ring-offset-3
                focus:ring-green-100
                focus:ring-offset-green-50
                focus:border-green-100
                focus:placeholder-gray-300
                p-3
                block
                w-full
                text-sm
                md:text-sm
                text-gray-700
                border
                border-gray-300
                rounded-md">
                </textarea>
            </div>
            <div
                className="
                flex
                justify-between
                flex-col
                lg:flex-row
                ">
                <label className='
                text-gray-500
                w-[300px]
                pb-2
                md:pb-2
                lg:pb-0
                select-none'>
                短く例えると
                <br />
                    <span className="text-xs text-gray-400">50文字以内</span>
                </label>
                <input
                value={formContents.short_paraphrase}
                onChange={handleChange}
                name='short_paraphrase'
                placeholder='土地'
                type="text"
                className='
                max-w-[650px]
                shadow-sm
                outline-none
                focus:ring-2
                focus:ring-offset-3
                focus:ring-green-100
                focus:ring-offset-green-50
                focus:border-green-100
                focus:placeholder-gray-300
                p-3
                block
                w-full
                text-sm
                md:text-sm
                text-gray-700
                border
                border-gray-300
                rounded-md'
                ></input>
            </div>
            <div
                className="
                flex
                justify-between
                flex-col
                lg:flex-row">
                <label
                className='
                text-gray-500
                w-[300px]
                pb-2
                md:pb-2
                lg:pb-0
                select-none'>
                    詳しい説明
                <br />
                <span className="text-xs text-gray-400">400文字以内</span>
                </label>
                <textarea
                value={formContents.detail}
                onChange={handleChange}
                name="detail"
                placeholder="WEBサイトを「家」とすると、サーバーは「土地」に例えられます。"
                maxLength={400}
                rows={8}
                className="
                max-w-[650px]
                shadow-sm
                outline-none
                focus:ring-2
                focus:ring-offset-3
                focus:ring-green-100
                focus:ring-offset-green-50
                focus:border-green-100
                focus:placeholder-gray-300
                px-3
                pt-3
                block
                w-full
                text-sm
                md:text-sm
                text-gray-700
                border
                border-gray-300
                rounded-md
                "
                ></textarea>
            </div>
            <RegisterCreateBtn />
            </form>
        </div>
  )
}
