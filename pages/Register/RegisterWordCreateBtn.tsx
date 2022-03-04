import React, {useState,useCallback} from 'react'
import { Modal } from '../../src/components/Modal/Modal'
import { useRouter } from 'next/router';

export const RegisterWordCreateBtn = ({title, setTitle}) => {

const [ words, setWords ] = useState()
const [show, setShow] = useState(false)
// const [title, setTitle] = useState('')
const [short_paraphrase, setShort_paraphrase] = useState('')
const [description, setDescription] = useState('')
const router = useRouter()

// const openModal = useCallback(() => {
//   setShow(true)
// }, [])

  const submitWords = (e) => {
  {/* @ts-ignore */}
  setShow(false)

  //関数の中に関数は入れない。関数にしなくてもいい
  // const routerPushWords = () => {

  //Firebaseに渡すので状態管理させなくてOK
  //useStateでもいいのでは・・？
      // const newWords = [
      //     {
      //         id:'',
      //         title,
      //         short_paraphrase: '',
      //         description: '',
      //     },
      //     ...words,
      // ]
      // console.log(words)
      // setWords(newWords)
  // }
//routerでクエリを渡すという手もある
  router.push({
    pathname:'/',
    query: {
      // id:'',
      title,
      short_paraphrase,
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
    rounded-3xl
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
