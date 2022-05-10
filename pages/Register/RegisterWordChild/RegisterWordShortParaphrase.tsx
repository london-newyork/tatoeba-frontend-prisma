import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Words } from '../../../src/components/types/types'
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

export const RegisterWordShortParaphrase = ({ shortParaphrase, setShortParaphrase, query }) => {

  const [words, setWords] = useRecoilState<Words[]>(WordsAtom)

  useEffect(() => {
    if(query.tId){
      setShortParaphrase(query.shortParaphrase)
    }
  }, [query.tId])

  const handleChangeShortParaphrase = (e) =>{
    setShortParaphrase(e.target.value)
  }

  const handleUpdateShortParaphrase = (e) => {

    const words_tIds = words.map(item => item.tId)
    const current_tId = words_tIds.filter(tId => tId === query.tId).toString()

    //current_tIdがあった時、setShortParaphraseに新しく入力中のタイトルをセット
        if(current_tId) {
          setShortParaphrase(()=> e.target.value)
        }
    }
  return (
    <div
        className="
        flex
        justify-between
        flex-col
        lg:flex-row
        ">
        <label className='
            text-gray-500
            leading-tight
            w-[300px]
            pb-2
            md:pb-2
            lg:pb-0
            select-none'>
            短く例えると
            <br />
            <span className="text-xs text-gray-300">50文字以内</span>
        </label>
        <input
        value={shortParaphrase}
        onChange={query.tId ? handleUpdateShortParaphrase : handleChangeShortParaphrase}
        name='short_paraphrase'
        placeholder='土地'
        type="text"
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
        p-3
        block
        w-full
        text-sm
        md:text-sm
        text-gray-700
        border
        border-gray-300
        rounded-md
        '
        ></input>
    </div>
  )
}
