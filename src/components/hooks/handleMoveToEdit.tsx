import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

export const useHandleMoveToEdit = (props:{words:Words[] | ParsedUrlQuery[], tId:string}) => {
    const router = useRouter()
    const { words } = props
    const handleMoveToEdit = () => {
        const title = router.query.title
        const shortParaphrase = router.query.shortParaphrase
        const description = router.query.description

        words.forEach((item:Words) => {
            if(item.tId === props.tId) {

                router.push({
                    pathname:'/Register/',
                    query: {
                        tId: props.tId,
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