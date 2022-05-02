import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Header } from '../../src/components/Header/Header'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoard/DashBoardLayouts'
import { Avatar } from '../../src/components/DashBoard/Avatar'
import {ProfileLayouts} from '../../src/components/Layouts/DashBoard/ProfileLayouts'
import {TatoeListLayouts} from '../../src/components/Layouts/DashBoard/TatoeListLayouts'
import { Profile } from '../../src/components/DashBoard/Profile'
import { TatoeListWrapper } from '../../src/components/DashBoard/TatoeListWrapper'
import { useRouter } from 'next/router'

export type User = {
    user_id: string
    user_name: string
    e_mail: string
    password: string
    t_id: string //既存の型を追加予定
    creation_time: string //数値を日付へ置き換える
    title: string //既存の型を追加予定
    shortParaphrase: string //既存の型を追加予定
    description: string //既存の型を追加予定
    t_image_url: string //既存の型を追加予定
    followed_count: number | null //その例えをフォローしている人の数
    follower_id: string //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
}

const DashBoard = () => {

//test data = API
const userInfo:User[]= [
    {user_id: "111111", user_name: "Vincent Thames", e_mail: "test_Vincent@gmail.com", password:"15555xxrQ", t_id: "ddddda1111", creation_time: "2022/05/01", title: "API", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_image_url: "/...", followed_count:1, follower_id: "222222" },
    {user_id: "222222", user_name: "Nola StradFord", e_mail: "test_Nola@gmail.com", password:"15555xxrQ", t_id: "bbbbbasdg", creation_time: "2022/05/01", title: "SQL", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_image_url: "/...", followed_count:1, follower_id: "222222" },
    {user_id: "333333", user_name: "Christel", e_mail: "test_Christel@gmail.com", password:"15555xxrQ", t_id: "zrzsz35df", creation_time: "2022/05/01", title: "サーバー", shortParaphrase: "あいうえお", description: "あいうえおかきくえこ", t_image_url: "/...", followed_count:1, follower_id: "222222" },
]

const router = useRouter()
console.log(router.query);//登録ページから値取得確認済み

  return (
    <div>
        <Header />
        <DashBoardLayouts>
            <ProfileLayouts>
                <Profile userInfo={userInfo} />
            </ProfileLayouts>
            <TatoeListLayouts>
                <TatoeListWrapper userInfo={userInfo} />
            </TatoeListLayouts>
        </DashBoardLayouts>
    </div>
  )
}

export default DashBoard