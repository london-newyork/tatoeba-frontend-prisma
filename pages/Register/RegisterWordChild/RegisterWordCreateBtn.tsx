import React from 'react'
// import { Modal } from '../../../src/components/Modal/Modal'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

export const RegisterWordCreateBtn = ({title, shortParaphrase, description, creationTime}) => {

  const [words, setWords] = useRecoilState(WordsAtom)
  // const [show, setShow] = useState(false)
  const router = useRouter()

  console.log("Create btn title",title);

  console.log("Create btn Words 1",words);

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

    // const newWords = [
    //   {
    //     tId : (query_tId ? query_tId : tId),
    //     title,//propsで渡ってきたtitle
    //     shortParaphrase,//propsで渡ってきたshortParaphrase
    //     description,//propsで渡ってきたdescription
    //     creationTime//propsで渡ってきたcreationTime
    //   },
    //   ...words,
    // ]

    // setWords(newWords)//wordsに格納された新しいwordsたち

    if(!query_tId){
      console.log("新規");
      const firstAddWords =
      [
        {
          tId,
          title,//propsで渡ってきたtitle
          shortParaphrase,//propsで渡ってきたshortParaphrase
          description,//propsで渡ってきたdescription
          creationTime//propsで渡ってきたcreationTime
        },
        ...words,
      ]
      setWords(firstAddWords)

      router.push({
        pathname:'/DashBoard',
        query: {
          tId,//新しく取得されたtId
          title,//propsで渡ってきたtitle
          shortParaphrase,//propsで渡ってきたshortParaphrase
          description,//propsで渡ってきたshortParaphrase
          creationTime//propsで渡ってきたshortParaphrase
        }
      })

      console.log("Create Btn firstAddWords", words);
    } //これはOK

    //ここからダメ => TatoeListのところでwordsを回す時の挙動を書いた方がいいかも？

    if(query_tId){
      console.log("更新");

      const newWordsTest = words.map(item=> {

        //wordsにある既存tIdとqueryで渡ってきたtIdが一致したとき
        if(item.tId === query_tId){

          [
            {
              tId: item.tId,
              title,//propsで渡ってきたtitle
              shortParaphrase,//propsで渡ってきたshortParaphrase
              description,//propsで渡ってきたdescription
              creationTime//propsで渡ってきたcreationTime
            },
            ...item

          ]
        }
        return item
      })
      setWords(newWordsTest)

      router.push({
        pathname:'/DashBoard',
        query: {
          // tId,
          // title,//propsで渡ってきたtitle
          // shortParaphrase,//propsで渡ってきたshortParaphrase
          // description,//propsで渡ってきたshortParaphrase
          // creationTime//propsで渡ってきたshortParaphrase
        }
      })

      console.log("更新２");
      console.log(" Create Btn words 2",words);

    }

    // router.push({
    //   pathname:'/DashBoard',
    //   query: {
    //     tId,//新しく取得されたtId
    //     title,//propsで渡ってきたtitle
    //     shortParaphrase,//propsで渡ってきたshortParaphrase
    //     description,//propsで渡ってきたshortParaphrase
    //     creationTime//propsで渡ってきたshortParaphrase
    //   }
    // })
    console.log("Create Btn Words Last",words);


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
