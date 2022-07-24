import React, { useEffect } from 'react'
import { Header } from '../../src/components/Header/Header'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoard/DashBoardLayouts'
import {ProfileLayouts} from '../../src/components/Layouts/DashBoard/ProfileLayouts'

import { Profile } from '../../src/components/DashBoard/Profile'

import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { WordsAtom } from '../../src/components/utils/atoms/WordsAtom'
import { Words } from '../../src/components/types/types'
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import { userInfo } from '../../src/components/mock/userInfo'
import { getStorage } from '../../src/lib/storage'

export type User = {
    userId: string //一意のid primaryKey tatoe listとひもづく
    user_name: string
    e_mail: string
    password: string
    tId: string | string[]//既存の型を追加予定 一意のid primaryKey? =>follower listとひもづく
    creationTime: string | string[]//数値を日付へ置き換える
    title: string | string[]//既存の型を追加予定
    shortParaphrase: string | string[]//既存の型を追加予定
    description: string | string[]//既存の型を追加予定
    tImageUrl: string | string[]//既存の型を追加予定
    followedCount: number | null //その例えをフォローしている人の数
    followerId: string //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
}

export type testUserProfile = {
    userId: string //一意のid primaryKey tatoe listとひもづく
    user_name: string
    e_mail: string
    password: string
}

export type testFollower = {
    followedCount: number | null //その例えをフォローしている人の数
    followerId: string //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
}

export type testUserId = Pick<testUserProfile, "userId">

export type testUserWords = testUserId & Words

export type testUserFollower = testUserId & testFollower

const DashBoard = () => {
const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(WordsAtom)
const router = useRouter()

//userとfollower　list以外で例え登録ページから入ってきた情報のテストデータ
// const testUserProfile: testUserProfile[] = [
//     {
//     userId: "222222",
//     user_name: "Nola StradFord",
//     e_mail: "test_Nola@gmail.com",
//     password:"15555xxrQ",
//     },
// ]

// バックエンドに対してアクセストークンを渡してユーザー一覧を要求
// 汎用性を考えると関数名がこれでいいかはわからない。
useEffect(() => {
    const sendAuthUsersAccessToken = async() => {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        headers: {
            Authorization: `Bearer ${getStorage('jwt')}`
        }
      })
      const data = await response.json()

      // console.log(data)
    }
    sendAuthUsersAccessToken()
  },[])

// 個々の情報をとってくるようにする。Mockになっているデータと置き換える。
  return (
    <div>
    <Head>
    </Head>
    <div>
        <Header />
        <DashBoardLayouts>
            <ProfileLayouts>
                <Profile userInfo={userInfo} />
            </ProfileLayouts>
        </DashBoardLayouts>
    </div>
    </div>
  )
}

export default DashBoard