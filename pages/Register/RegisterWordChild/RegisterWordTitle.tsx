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

  console.log(words);
  
  // const wordsTIds = words.map((item)=>item.tId)
  // console.log("What is wordsTIds ?",wordsTIds);
  
  // const currentTid = wordsTIds.filter(tId => tId === query.tId).toString()
  // const wordsTitles = words.map((item)=>item.title)
  // const currentTitle = wordsTitles.filter(tId => tId === query.title).toString()
  // console.log("currentTitle",currentTitle);

  const handleUpdateTitle = (e) => {

    const wordsTIds = words.map((item)=>item.tId)
    const currentTid = wordsTIds.filter(tId => tId === query.tId).toString()
    // const wordsTitles = words.map((item)=>item.title)
    // const currentTitle = wordsTitles.filter(tId => tId === query.title).toString()
    // console.log("currentTitle",currentTitle);

      // setTitle(query.title = e.target.value)
      //mapでwordsに新しいtitleを送り込まないとリストが複製されてしまう。
      // setTitle(currentTitle = e.target.value)
        // console.log("What is word ?",word);
        //wordsに取り込まれないと、リストにうまく反映されない。
        //setTitleに取り込まれないとvalueには反映されない。

          //[最新]：tIdがおかしくTop/CardChildのtIdの箇所でエラー、スーパーリロードしても最初からwordsに37個もリストがあり、すべてnull。その上、何も登録していないのに、0番目のところにtIdに同じ値がたくさん入っている。 => tIdが特定できないため、wordsTIdsやcurrentTidが動かない。

        if(currentTid) {
          const newTitle = setTitle(()=> e.target.value)

          const newWords = words.map((item:Words)=>{
            [
            {...item},
               {tId: currentTid, title:newTitle}
            ]
            return item
          })

          setWords([ ...newWords])
        }

    }

  console.log("★ after .+. setWords.+. words ★",words)

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
