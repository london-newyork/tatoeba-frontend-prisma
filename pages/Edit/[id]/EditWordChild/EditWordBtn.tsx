import React, {useState} from 'react'
import { Modal } from '../../../../src/components/Modal/Modal'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { RegisteredWordContents } from '../../../../src/components/utils/RegisteredWordContents'

export const EditWordBtn = ({title, shortParaphrase, description}) => {

  // const [newRouterQuery, setNewRouterQuery ] = useRecoilState(RegisteredWordContents)
  const [show, setShow] = useState(false)

  const router = useRouter()

  // const openModal = useCallback(() => {
  //   setShow(true)
  // }, [])

  function getUniqueId(){
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
  }
  const id = getUniqueId()

  const submitWords = (e) => {
    {/* @ts-ignore */}
    setShow(false)

    //関数の中に関数は入れない。関数にしなくてもいい
    //Firebaseに渡すので状態管理させなくてOK

    router.push({
      pathname:'/',
      query: {
        id,
        title,
        shortParaphrase,
        description,
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
      投稿する
    </button>
    {/* @ts-ignore */}
    <Modal show={show} setShow={setShow}/>
  </div>
  )
}
