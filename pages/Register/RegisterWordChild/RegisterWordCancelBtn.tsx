import React from 'react'
// import { Modal } from '../../../src/components/Modal/Modal'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

export const RegisterWordCancelBtn = (props) => {
  const { query_tId, title, shortParaphrase, description, creationTime} = props

  const [words, setWords] = useRecoilState(WordsAtom)
  const router = useRouter()

  const handleClickCancel = () => {

    if(query_tId){
      const newWords = words.map(item=> {
        if(item.tId === query_tId){
          return {
              tId: item.tId,
              title,
              shortParaphrase,
              description,
              creationTime,
            }
        } else {
          return item
        }
      })
      setWords(newWords)

      words.map(item=> {
        if(item.tId === query_tId){
          router.push({
            pathname:'/DashBoard',
          })
        }
      })
    }
  }

  return (
    <div className="flex justify-end">
    <button
      onClick={handleClickCancel}
      type="submit"
      className="
      p-3
      w-[200px]
      rounded-full
      bg-white
      text-gray-800
      border-gray-800
      border
      text-lg
      hover:bg-opacity-90
    ">
      キャンセル
    </button>
  </div>
  )
}
