import React from 'react'
import { Header } from '../../src/components/Header/Header'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoard/DashBoardLayouts'
import {ProfileLayouts} from '../../src/components/Layouts/DashBoard/ProfileLayouts'
import {TatoeListLayouts} from '../../src/components/Layouts/DashBoard/TatoeListLayouts'
import { Profile } from '../../src/components/DashBoard/Profile'
import { TatoeListWrapper } from '../../src/components/DashBoard/TatoeListWrapper'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { RegisteredWordContents } from '../../src/components/utils/atoms/RegisteredWordContents'
import { Words } from '../../src/components/types/types'
import { ParsedUrlQuery } from 'querystring'

export type User = {
    userId: string //一意のid primaryKey tatoe listとひもづく
    user_name: string
    e_mail: string
    password: string
    tId: string | string[]//既存の型を追加予定 一意のid primaryKey? =>follower listとひもづく
    creation_time: string | string[]//数値を日付へ置き換える
    title: string | string[]//既存の型を追加予定
    shortParaphrase: string | string[]//既存の型を追加予定
    description: string | string[]//既存の型を追加予定
    tImageUrl: string | string[]//既存の型を追加予定
    followed_count: number | null //その例えをフォローしている人の数
    follower_id: string //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
}

export type testUserProfile = {
    userId: string //一意のid primaryKey tatoe listとひもづく
    user_name: string
    e_mail: string
    password: string
}

export type TatoeList = {
    userId: string
    tId: string | string[]//既存の型を追加予定 一意のid primaryKey? =>follower listとひもづく
    creation_time: string | string[]//数値を日付へ置き換える
    title: string | string[]//既存の型を追加予定
    shortParaphrase: string | string[]//既存の型を追加予定
    description: string | string[]//既存の型を追加予定
    tImageUrl: string | string[]//既存の型を追加予定
}

export type Follower = {
    userId: string
    followed_count: number | null //その例えをフォローしている人の数
    follower_id: string //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
}

const DashBoard = () => {
const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(RegisteredWordContents)
const router = useRouter()
console.log("router.query",router.query);//登録ページから値取得確認済み
// console.log(router.query.tId);

console.log("DashBoard words", words);

//下記をコメントアウトで再レンダリングが起きなくなった。
// useEffect(() => {
// //router.queryをEditWordParentで状態管理させ、それをpropsでTopへ回すようリファクタする
//     router.isReady
//     ? setWords((prev)=> [router.query, ...prev])
//     : null
// }, [router.query])

const tId = router.query.tId
const creation_time = router.query.creation_time
const title = router.query.title
const shortParaphrase = router.query.shortParaphrase
const description = router.query.description
const tImageUrl = router.query.tImageUrl
const followed_count = []
const follower_id = []

//test data = API想定
const userInfo:User[]= [
    {userId: "111111", user_name: "Vincent Thames", e_mail: "test_Vincent@gmail.com", password:"15555xxrQ", tId: "ddddda1111", creation_time: "2022/05/01", title: "API", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", tImageUrl: "/...", followed_count:1, follower_id: "222222" },
    {userId: "222222", user_name: "Nola StradFord", e_mail: "test_Nola@gmail.com", password:"15555xxrQ", tId: "bbbbbasdg", creation_time: "2022/05/01", title: "SQL", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", tImageUrl: "/...", followed_count:1, follower_id: "222222" },
    {userId: "333333", user_name: "Christel", e_mail: "test_Christel@gmail.com", password:"15555xxrQ", tId: "zrzsz35df", creation_time: "2022/05/01", title: "サーバー", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", tImageUrl: "/...", followed_count:1, follower_id: "222222" },
]

//userとfollower　list以外で例え登録ページから入ってきた情報のテストデータ
const testUserProfile:testUserProfile[] = [
    {
    userId: "222222",
    user_name: "Nola StradFord",
    e_mail: "test_Nola@gmail.com",
    password:"15555xxrQ",
    },
]

  return (
    <div>
        <Header />
        <DashBoardLayouts>
            <ProfileLayouts>
                <Profile userInfo={userInfo} />
            </ProfileLayouts>
            <TatoeListLayouts>
                <TatoeListWrapper userInfo={userInfo} testUserProfile={testUserProfile}/>
            </TatoeListLayouts>
        </DashBoardLayouts>
    </div>
  )
}

export default DashBoard