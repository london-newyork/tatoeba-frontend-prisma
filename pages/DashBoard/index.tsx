import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Header } from '../../src/components/Header/Header'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoard/DashBoardLayouts'
import { Avatar } from '../../src/components/DashBoard/Avatar'
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
    user_id: string //一意のid primaryKey tatoe listとひもづく
    user_name: string
    e_mail: string
    password: string
    tid: string | string[]//既存の型を追加予定 一意のid primaryKey? =>follower listとひもづく
    creation_time: string | string[]//数値を日付へ置き換える
    title: string | string[]//既存の型を追加予定
    shortParaphrase: string | string[]//既存の型を追加予定
    description: string | string[]//既存の型を追加予定
    t_image_url: string | string[]//既存の型を追加予定
    followed_count: number | null //その例えをフォローしている人の数
    follower_id: string //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
}

const DashBoard = () => {
const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(RegisteredWordContents)
const router = useRouter()
console.log("router.query",router.query);//登録ページから値取得確認済み
// console.log(router.query.tid);


console.log("words", words);

useEffect(() => {
//router.queryをEditWordParentで状態管理させ、それをpropsでTopへ回すようリファクタする
    router.isReady
    ? setWords((prev)=> [router.query, ...prev])
    : null
}, [router.query])


const tid = router.query.tid
const creation_time = router.query.creation_time
const title = router.query.title
const shortParaphrase = router.query.shortParaphrase
const description = router.query.description
const t_image_url = router.query.t_image_url
const followed_count = []
const follower_id = []

//test data = API想定
const userInfo:User[]= [
    {user_id: "111111", user_name: "Vincent Thames", e_mail: "test_Vincent@gmail.com", password:"15555xxrQ", tid: "ddddda1111", creation_time: "2022/05/01", title: "API", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_image_url: "/...", followed_count:1, follower_id: "222222" },
    {user_id: "222222", user_name: "Nola StradFord", e_mail: "test_Nola@gmail.com", password:"15555xxrQ", tid: "bbbbbasdg", creation_time: "2022/05/01", title: "SQL", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_image_url: "/...", followed_count:1, follower_id: "222222" },
    {user_id: "333333", user_name: "Christel", e_mail: "test_Christel@gmail.com", password:"15555xxrQ", tid: "zrzsz35df", creation_time: "2022/05/01", title: "サーバー", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_image_url: "/...", followed_count:1, follower_id: "222222" },
]

//userとfollower　list以外で例え登録ページから入ってきた情報のテストデータ
const testData:User[] = [
    {
    user_id: "222222",
    user_name: "Nola StradFord",
    e_mail: "test_Nola@gmail.com",
    password:"15555xxrQ",
    tid,
    creation_time,
    title,
    shortParaphrase,
    description,
    t_image_url,
    followed_count:1,
    follower_id: "333333"
},
]
console.log("tid",tid);

console.log("testData[0].tid",testData[0].tid);//値がとれない


  return (
    <div>
        <Header />
        <DashBoardLayouts>
            <ProfileLayouts>
                <Profile userInfo={userInfo} />
            </ProfileLayouts>
            <TatoeListLayouts>
                <TatoeListWrapper userInfo={userInfo} testData={testData}/>
            </TatoeListLayouts>
        </DashBoardLayouts>
    </div>
  )
}

export default DashBoard