import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

// export const useHandleMoveToRegister = (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
export const useHandleMoveToRegister = (props:{words:Words[] | ParsedUrlQuery[], router: NextRouter}) => {

    const router = useRouter()
    const { words } = props
    const handleMoveToRegister = () => {
        const tId = router.query.tId
        const title = router.query.title
        const shortParaphrase = router.query.shortParaphrase
        const description = router.query.description

        console.log("Dash router.query.title : ",router.query.title);

        words.forEach((item:Words) => {
            if(item.tId === tId) {

                router.push({
                    // pathname:'/Edit/[tId]',
                    pathname:'/Register/',
                    query: {
                        tId,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
            } return item
        }
        )
    }
return { handleMoveToRegister }
}