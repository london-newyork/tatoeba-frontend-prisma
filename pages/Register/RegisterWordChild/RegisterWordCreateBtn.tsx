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

  console.log("query_tId",query_tId);
  console.log("create btn title",title);

  // const openModal = useCallback(() => {
  //   setShow(true)
  // }, [])

  function getUniqueId(){
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
  }
  const tId = getUniqueId()

  const submitWords = () => {
    if (title==="" || shortParaphrase ==="" || description==="") {
      return
    }
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

    //下記の書き方だと、router push するたび、常に　tId = 新しく発行されたtIdを使ってしまっている。
    //これを、Words更新後も、同じtIdを引き継いでrouter pushしたい。=>下記の書き方で成功
    //ここのコンポーネントの変数titleには、titleのコンポーネントで編集した更新前・更新後の値が、同じtitleとなって渡っているのでそれは意図通り。

    //ただし、再びDashBoardに遷移したときに元のリストに入っていない。 => mapで回す必要がある。wordsの中に更新したものと元のIDを合わせて送り込む必要がある。

    //DashBoardで全てのリストの編集ボタンをクリックすると、編集ページへ遷移した時に、直前で編集していた同じtitleが表示されてしまう。例) 直前でtitleを「サーバー」に更新 → DashBoardでリスト1-10までどれも編集ボタン押すと表示されているのが「サーバー」。
    //＝>おそらく、router.query.titleを内部で使い回していることが原因と思われる。

    // router.push({
    //   pathname:'/DashBoard',
    //   query: {
    //     tId : (query_tId ? query_tId : tId),
    //     title,
    //     shortParaphrase,
    //     description,
    //     creationTime
    //   }
    // })
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
