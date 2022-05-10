import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Words } from '../../../src/components/types/types'
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

export const RegisterWordDescription = ({ description , setDescription, query }) => {

  const [words, setWords] = useRecoilState<Words[]>(WordsAtom)

  useEffect(() => {
    if(query.tId){
      setDescription(query.description)
    }
  }, [query.tId])

  const handleChangeDescription = (e) =>{
    setDescription(e.target.value)
  }

  const handleUpdateDescription = (e) => {

    const words_tIds = words.map(item => item.tId)
    const current_tId = words_tIds.filter(tId => tId === query.tId).toString()

    //current_tIdがあった時、setDescriptionに新しく入力中のタイトルをセット
        if(current_tId) {
          setDescription(e.target.value)
        }
    }
  return (
    <div
        className="
        flex
        justify-between
        flex-col
        lg:flex-row">
        <label
            className='
            text-gray-500
            leading-tight
            w-[300px]
            pb-2
            md:pb-2
            lg:pb-0
            select-none'>
                詳しい説明
            <br />
            <span className="text-xs text-gray-300">400文字以内</span>
        </label>
        <textarea
            value={description}
            onChange={query.tId ? handleUpdateDescription : handleChangeDescription}
            name="description"
            placeholder="WEBサイトを「家」とすると、サーバーは「土地」に例えられます。"
            maxLength={400}
            rows={8}
            className='
            lg:max-w-[650px]
            max-w-full
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
            '
            >
        </textarea>
    </div>
  )
}
