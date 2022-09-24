import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { DashBoardLayouts } from '../../components/Layouts/DashBoard/DashBoardLayouts';
import { ProfileLayouts } from '../../components/Layouts/DashBoard/ProfileLayouts';

import { Profile } from '../../components/DashBoard/Profile';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { TatoeAtom } from '../../components/utils/atoms/TatoeAtom';
import { Tatoe } from '../../components/types/types';
import { ParsedUrlQuery } from 'querystring';

import Head from 'next/head';

export type testUserProfile = {
  userId: string; //一意のid primaryKey tatoe listとひもづく
  user_name: string;
  e_mail: string;
  password: string;
};

export type testFollower = {
  followedCount: number | null; //その例えをフォローしている人の数
  followerId: string; //例えをフォローしている人のid =>　その人の情報はidからどう取得するか課題
};

export type testUserId = Pick<testUserProfile, 'userId'>;

export type testUserTatoe = testUserId & Tatoe;

export type testUserFollower = testUserId & testFollower;

const DashBoard = () => {
  // const [tatoe, setTatoe] = useRecoilState<Tatoe[] | ParsedUrlQuery[]>(
  //   TatoeAtom
  // );
  // const router = useRouter();

  // 個々の情報をとってくるようにする。Mockになっているデータと置き換える。
  return (
    <div>
      <Head>//</Head>
      <div>
        <Header />
        <DashBoardLayouts>
          <ProfileLayouts>
            <Profile />
          </ProfileLayouts>
        </DashBoardLayouts>
      </div>
    </div>
  );
};

export default DashBoard;
