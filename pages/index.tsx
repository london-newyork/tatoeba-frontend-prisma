import { Header } from "../src/components/Header/Header"
import { TopMain } from "../src/components/Layouts/TopMain"
import { Top } from '../src/components/Top/Top'
import { Footer } from '../src/components/Footer/Footer'
import { RegisteredWordContents } from '../src/components/utils/RegisteredWordContents'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router';
import React,{Dispatch, SetStateAction} from 'react'

export type Edit= {
  handleMoveToEdit: (id: string, title: string, shortParaphrase: string, description: string)=>void
  words: string[]
  setWords: Dispatch<SetStateAction<String>>
  router: string
}

export default function Home() {
  const router = useRouter();
  const [words, setWords] = useRecoilState(RegisteredWordContents)
  const handleMoveToEdit = (
    id: string,
    title: string,
    shortParaphrase: string,
    description: string
    ) => {
    words.forEach((query:any) => {
        if(query.id === id) {

            router.push({
                pathname:'/Edit/[id]',
                query: {
                    id,
                    title,
                    shortParaphrase,
                    description,
                }
            })
        }
    }
    )
}

  return (
    <div>
      <Header />
      <TopMain>
        <Top handleMoveToEdit={handleMoveToEdit} words={words} setWords={setWords} router={router}/>
      </TopMain>
      <Footer />
    </div>
  )
}
