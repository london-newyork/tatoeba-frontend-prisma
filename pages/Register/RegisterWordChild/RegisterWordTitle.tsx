import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Words } from '../../../src/components/types/types'
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

export const RegisterWordTitle = ({ title, setTitle, query }) => {

  const [words, setWords] = useRecoilState<Words[]>(WordsAtom)

  useEffect(() => {
    if(query.tId){
      setTitle(query.title)
    }
  }, [query.tId])

  const handleChangeTitle = (e) =>{
    setTitle(e.target.value)
  }

  const handleUpdateTitle = (e) => {

    const words_tIds = words.map(item => item.tId)
    const current_tId = words_tIds.filter(tId => tId === query.tId).toString()

    //current_tIdがあった時、newTitleに新しく入力中のタイトルをセット
        if(current_tId) {
          const newTitle = setTitle(()=> e.target.value)
          //newWordsにwordsから取り出した既存のitemたちと、元のtId・新しいタイトル(newTitle)をセット
          const newWords = words.map(item => {
              [{...item},{tId: current_tId, title: newTitle}]
          return item
          })
          //newWordsをwordsにセットする
          setWords([...newWords])
        }
    }

  return (
    <div
        className="
        flex
        justify-between
        flex-col
        lg:flex-row">
        <label className='
            text-gray-500
            leading-tight
            w-[300px]
            pb-2
            md:pb-2
            lg:pb-0
            select-none
            '>
            わかりにくい専門用語・文章<br />
            <span className="text-xs text-gray-300">50文字以内</span>
        </label>
        <textarea
            value={title}
            name='title'
            onChange={query.tId ? handleUpdateTitle : handleChangeTitle}
            rows={2}
            placeholder='サーバー'
            maxLength={50}
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
        '>
        </textarea>
    </div>
  )
}
