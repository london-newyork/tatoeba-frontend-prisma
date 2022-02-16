import React, {useState,useCallback} from 'react'
import { Modal } from '../../src/components/Modal/Modal'

export const RegisterCreateBtn = () => {
const [show, setShow] = useState(false)
const openModal = useCallback(() => {
  setShow(true)
}, [])
  return (
    <div className="flex justify-end">
    <button
    onClick={openModal}
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
