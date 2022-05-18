import React from 'react'
// import { Modal } from '../../../src/components/Modal/Modal'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

export const RegisterWordCreateBtn = ({title, shortParaphrase, description, creationTime}) => {

  const [words, setWords] = useRecoilState(WordsAtom)
  // const [show, setShow] = useState(false)
  const router = useRouter()

  const query_tId = router.query.tId

  // const openModal = useCallback(() => {
  //   setShow(true)
  // }, [])

  function getUniqueId(){
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
  }
  const tId = getUniqueId()

  const submitWords = () => {
    if (title === "" || shortParaphrase === "" || description === "") {
      alert("入力されていない箇所があります。")
      return
    }
    {/* @ts-ignore */}
    // setShow(false)

    if(!query_tId){
      const firstAddWords =
      [
        {
          tId,
          title,
          shortParaphrase,
          description,
          creationTime
        },
        ...words,
      ]
      setWords(firstAddWords)

      router.push({
        pathname:'/DashBoard',
        query: {
          tId,
          title,
          shortParaphrase,
          description,
          creationTime
        }
      })
    }

    if(query_tId){
      const newWords = words.map(item=> {
        if(item.tId === query_tId){
          return {
              tId: item.tId,
              title,
              shortParaphrase,
              description,
              creationTime
            }
        } else {
          return item
        }
      })
      setWords(newWords)

      router.push({
        pathname:'/DashBoard',
        query: {
          tId: query_tId,
          title,
          shortParaphrase,
          description,
          creationTime
        }
      })
    }
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
      rounded-full
      bg-dark_green
      text-gray-800
      text-lg
      hover:bg-opacity-90
    ">
      投稿する
    </button>
    {/* @ts-ignore */}
    {/* <Modal show={show} setShow={setShow}/> */}
  </div>
  )
}
