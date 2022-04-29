import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

export const useHandleMoveToResult= (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
    const { words, router } = props

    const id = router.query.id
    const title = router.query.title
    const shortParaphrase = router.query.shortParaphrase
    const description = router.query.description

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