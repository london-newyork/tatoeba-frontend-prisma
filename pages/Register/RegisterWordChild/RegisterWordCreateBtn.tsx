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

  // console.log("query_tId",query_tId);
  // console.log("create btn title",title);

  // const openModal = useCallback(() => {
  //   setShow(true)
  // }, [])

  function getUniqueId(){
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
  }
  const tId = getUniqueId()

  const submitWords = () => {
    if (title === "" || shortParaphrase === "" || description === "") {
      return
    }
    {/* @ts-ignore */}
    // setShow(false)
    const newWords = [
      {
        tId : (query_tId ? query_tId : tId),
        title,
        shortParaphrase,
        description,
        creationTime
      },
      ...words,
    ]

    setWords(newWords)

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
    {/* <Modal show={show} setShow={setShow}/> */}
  </div>
  )
}
