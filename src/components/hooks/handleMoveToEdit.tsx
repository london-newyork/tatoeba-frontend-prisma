import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

export const useHandleMoveToEdit = (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
    const { words, router } = props
    const handleMoveToEdit = () => {
        const tid = router.query.tid
        const title = router.query.title
        const shortParaphrase = router.query.shortParaphrase
        const description = router.query.description

        words.forEach((item:Words) => {
            if(item.tid === tid) {

                router.push({
                    pathname:'/Edit/[id]',
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
return { handleMoveToEdit }
}