// import { NextRouter } from 'next/router'
// import { ParsedUrlQuery } from 'querystring'
// import { Words } from '../types/types'

// export const useHandleMoveToEdit = (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
//     const { words, router } = props
//     const handleMoveToEdit = () => {
//         const tId = router.query.tId
//         const title = router.query.title
//         const shortParaphrase = router.query.shortParaphrase
//         const description = router.query.description

//         words.forEach((item:Words) => {
//             if(item.tId === tId) {

//                 router.push({
//                     pathname:'/Edit/[tId]',
//                     query: {
//                         tId,
//                         title,
//                         shortParaphrase,
//                         description,
//                     }
//                 })
//             } return item
//         }
//         )
//     }
// return { handleMoveToEdit }
// }