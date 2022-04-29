import { Edit, Words } from '../types/types'

export const useHandleMoveToEdit = (props: Edit & Words) => {
    const { words, router } = props
    const handleMoveToEdit = () => {

        words.forEach((query:Words) => {
            if(query.id === props.id) {

                router.push({
                    pathname:'/SearchResult/[id]',
                    query: {
                        id,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
            } return query
        }
        )
    }
return { handleMoveToEdit }
}