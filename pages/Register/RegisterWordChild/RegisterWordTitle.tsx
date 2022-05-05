import React, { useEffect } from 'react'

export const RegisterWordTitle = ({ title, setTitle, query, words, setWords }) => {

  useEffect(() => {
    if(query.tId){
      setTitle(query.title)
    }
  }, [query.tId])

  //何か入力中にはしる
  const handleChangeTitle = (e) =>{
    setTitle(e.target.value)
  }

//query.tIdがあるとき(更新時)
const handleUpdateTitle = (e) => {

    const FindWords_tId = words.map((item)=>item.tId)
    const filtered_tId = FindWords_tId.filter(tId => tId === query.tId).toString()
    if(filtered_tId) {
      //titleは配列に入っておらず単体なためmapがきかない。
      // setTitle(prev=>{prev.map((item)=>{return [...item, e.target.value]}) })
      setTitle(e.target.value)
      return setTitle("")
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
