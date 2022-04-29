import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Result, Words } from '../types/types'
// words: Words[] | ParsedUrlQuery[]; router: NextRouter;
// export const useHandleMoveToResult= (props:Result & Words) => {
export const useHandleMoveToResult= (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
    const { words, router } = props

    const handleMoveToResult = () => {
            words.forEach((item:Words) => {
                if(item.id === id) {

                router.push({
                    pathname:'/SearchResult/[id]',
                    query: {
                        id,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
            } return item
        }
        )

    }
    return { handleMoveToResult }
}