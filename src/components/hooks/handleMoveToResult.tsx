import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

export const useHandleMoveToResult= (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
    const { words, router } = props

    const tid = router.query.tid
    const title = router.query.title
    const shortParaphrase = router.query.shortParaphrase
    const description = router.query.description

    const handleMoveToResult = () => {
            words.forEach((item:Words) => {
                if(item.tid === tid) {

                router.push({
                    pathname:'/SearchResult/[tid]',
                    query: {
                        tid,
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