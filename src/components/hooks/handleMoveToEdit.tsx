import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { EditBtnProps } from '../btn/EditBtn'
import { Words } from '../types/types'

// export const useHandleMoveToRegister = (props:{words:Words[] | ParsedUrlQuery[],router: NextRouter}) => {
export const useHandleMoveToEdit = (props:{words:Words[] | ParsedUrlQuery[], tId:string}) => {
    const router = useRouter()
    const { words } = props
    const handleMoveToEdit = () => {
        // const tId = router.query.tId
        const title = router.query.title
        const shortParaphrase = router.query.shortParaphrase
        const description = router.query.description

        console.log("handleMoveToEdit props.tId",props.tId);
        //Editを通さないで新規で作成したリストは削除できる。(props.tIdは重なっていない。)
        //一度作成したリストを更新しようとEditを通ったときにprop.tIdが複製されてしまい、削除もおかしくなる。

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