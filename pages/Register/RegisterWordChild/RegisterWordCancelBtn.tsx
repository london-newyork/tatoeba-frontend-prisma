// import React from 'react'
// // import { Modal } from '../../../src/components/Modal/Modal'
// import { useRouter } from 'next/router';
// import { useRecoilState } from 'recoil';
// import { WordsAtom } from '../../../src/components/utils/atoms/WordsAtom'

// export const RegisterWordCancelBtn = ({title, shortParaphrase, description, creationTime}) => {

//   const [words, setWords] = useRecoilState(WordsAtom)

//   const router = useRouter()

//   const query_tId = router.query.tId

// //   function getUniqueId(){
// //     return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
// //   }
// //   const tId = getUniqueId()

//   const handleClickCancel = () => {

//     console.log("query_tId",query_tId);
    
//     if(query_tId){
//       const newWords = words.map(item=> {
//         if(item.tId === query_tId){
//             console.log("item.tId",item.tId);

//           return {
//               tId: item.tId,
//               title,
//               shortParaphrase,
//               description,
//               creationTime
//             }
//         } else {
//           return item
//         }
//       })
//       setWords(newWords)
//       console.log("newWords tId", newWords.tId,);//undefined

//       router.push({
//         pathname:'/DashBoard',
//         query: {
//           tId: newWords.tId,//なし
//           title,
//           shortParaphrase,
//           description,
//           creationTime
//         }
//       })
//     }

// }

//   return (
//     <div className="flex justify-end">
//     <button
//       onClick={handleClickCancel}
//       type="submit"
//       className="
//       p-3
//       w-[200px]
//       rounded-full
//       bg-dark_green
//       text-gray-800
//       text-lg
//       hover:bg-opacity-90
//     ">
//       キャンセル
//     </button>
//   </div>
//   )
// }
