import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

export const useHandleMoveToResult= (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
    const { words, router } = props

    const t_id = router.query.t_id
    const title = router.query.title
    const shortParaphrase = router.query.shortParaphrase
    const description = router.query.description

    const handleMoveToResult = () => {
            words.forEach((item:Words) => {
                if(item.t_id === t_id) {

                router.push({
                    pathname:'/SearchResult/[id]',
                    query: {
                        t_id,
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