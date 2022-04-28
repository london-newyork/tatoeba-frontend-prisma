import { VFC } from 'react'
import { Result, Words } from '../types/types'

export const useHandleMoveToResult= (props:Result & Words) => {
    const { words, router } = props
    const handleMoveToResult = () => {
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
    return { handleMoveToResult }
}