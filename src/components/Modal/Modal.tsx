import React, { useCallback } from 'react'

type Modal = {
    show: boolean
    setShow: boolean
}

export const Modal = (props: Modal) => {
const {show, setShow} = props
    const closeModal = useCallback(() => {
        {/* @ts-ignore */}
        setShow(false)
    }, []);

    return (
    <>
        { show ? <div
        className="
        fixed
        top-0
        left-0
        w-full
        h-screen
        bg-gray-400
        bg-opacity-50">
            <div
            id="content"
            onClick={(e) => e.stopPropagation()}>
            <div
              className="
              z-10
              translate-y-1/2
              lg:px-12
              px-5
              py-20
              rounded-md
              bg-white
              mx-auto
              max-w-[1000px]
              flex
              flex-col
              ">
                <p className="
                pb-10
                text-center
                text-2xl
                text-gray-700">
                    ご投稿ありがとうございました!
                </p>
                <button
                onClick={closeModal}
                className="
                    p-3
                    w-[200px]
                    rounded-3xl
                    bg-dark_green
                    text-white
                    text-lg
                    hover:bg-opacity-90
                    mx-auto">
                    閉じる
                </button>
            </div>
            </div>
        </div> : null }
    </>
)
};
