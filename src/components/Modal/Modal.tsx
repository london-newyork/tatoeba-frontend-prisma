import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router';
// import { wordsAtom } from '../../../src/components/atom/atom'

// type Modal = {
//     show: boolean
//     setShow: boolean
// }

// const newWords = {
//     id:'',
//     title: '',
//     short_paraphrase: '',
//     description: '',
// } as const

type ModalNewWords = {
    t_id: number | string
    title: string
    short_paraphrase: string
    description: string
    show: boolean
    setShow: boolean
}

export const Modal = (props:ModalNewWords) => {
    // const [ title, setTitle ] = useAtom(writableWordsAtom)
    // const [ words, setWords ] = useState<ModalNewWords>()
    const [ words, setWords ] = useState<ModalNewWords>()
    const [ title, setTitle ] = useState()
    const router = useRouter()
    const { show, setShow } = props
        const closeModalSubmitWords = useCallback((e):void => {
            {/* @ts-ignore */}
            setShow(false)

            //関数の中に関数は入れない。関数にしなくてもいい
            // const routerPushWords = () => {

            //Firebaseに渡すので状態管理させなくてOK
            // //useStateでもいいのでは・・？
            //     const newWords = [
            //         {
            //             t_id:'',
            //             title,
            //             short_paraphrase: '',
            //             description: '',
            //         },
            //         ...words,
            //     ]
            //     // console.log(words)
            //     setWords(newWords)
            // // }
//routerでクエリを渡すという手もある
            router.push('/');
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
                onClick={closeModalSubmitWords}
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
