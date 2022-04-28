import { Header } from "../src/components/Header/Header"
import { TopMainLayouts } from "../src/components/Layouts/TopMainLayouts"
import { Top } from '../src/components/Top/Top'
import { Footer } from '../src/components/Footer/Footer'
// import { RegisteredWordContents } from '../src/components/utils/RegisteredWordContents'
// import { useRecoilState } from 'recoil'
// import { NextRouter, useRouter } from 'next/router';
import React from 'react'
// import { Words } from "../src/components/types/types"
// import { ParsedUrlQuery } from "querystring"

export default function Home() {
  // const router = useRouter();
  // const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(RegisteredWordContents)

//   const handleMoveToEdit = (
//     id: string,
//     title: string,
//     shortParaphrase: string,
//     description: string
//     ) => {
//     words.forEach((query) => {
//         if(query.id === id) {

//             router.push({
//                 pathname:'/Edit/[id]',
//                 query: {
//                     id,
//                     title,
//                     shortParaphrase,
//                     description,
//                 }
//             })
//         }
//     }
//     )
// }

  return (
    <div>
      <Header />
      <TopMainLayouts>
        <Top
        // handleMoveToResult={handleMoveToResult}
        // handleMoveToEdit={handleMoveToEdit}
        // words={words}
        // setWords={setWords}
        // router={router}
        />
      </TopMainLayouts>
      <Footer />
    </div>
  )
}
