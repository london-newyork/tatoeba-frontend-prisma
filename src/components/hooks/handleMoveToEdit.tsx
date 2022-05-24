import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { Words } from '../types/types'

export const useHandleMoveToEdit = (props:{tId:string, title:string, shortParaphrase: string, description: string}) => {
    const router = useRouter()
    const handleMoveToEdit = () => {

        const tId = props.tId
        const title = props.title
        const shortParaphrase = props.shortParaphrase
        const description = props.description

                router.push({
                    pathname:'/Register/',
                    query: {
                        tId,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
    }
return { handleMoveToEdit }
}