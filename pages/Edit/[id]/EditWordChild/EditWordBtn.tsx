import React, {useState} from 'react'
import { Modal } from '../../../../src/components/Modal/Modal'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { RegisteredWordContents } from '../../../../src/components/utils/atoms/RegisteredWordContents'

export const EditWordBtn = ({tId, title, shortParaphrase, description, creationTime}) => {

  const [words, setWords] = useRecoilState(RegisteredWordContents)
  const [show, setShow] = useState(false)

  const router = useRouter()

  // const openModal = useCallback(() => {
  //   setShow(true)
  // }, [])

  // function getUniqueId(){
  //   return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
  // }
  // const tId = getUniqueId()

  const submitWords = (e) => {
    {/* @ts-ignore */}
    // setShow(false)

    const newWords = [
      {
        tId,
        title,
        shortParaphrase,
        description,
        creationTime
      },
      ...words,
    ]
    setWords(newWords)

    router.push({
      pathname:'/',
      query: {
        tId,
        title,
        shortParaphrase,
        description,
        creationTime
      }
    })
}

  return (
    <div className="flex justify-end">
    <button
    // onClick={openModal}
      onClick={submitWords}
      type="submit"
      className="
      p-3
      w-[200px]
      rounded-md
      bg-dark_green
      text-white
      text-lg
      hover:bg-opacity-90
    ">
      更新する
    </button>
    {/* @ts-ignore */}
    {/* <Modal show={show} setShow={setShow}/> */}
  </div>
  )
}
