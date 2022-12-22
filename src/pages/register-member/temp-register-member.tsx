import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SendAuthInfoBtn } from '@Components/btn/SendAuthInfoBtn';
import { Header } from '@Components/header/Header';
import { HeadLine } from '@Components/HeadLine';
import { AuthLayouts } from '@Layouts/AuthLayouts';
import { Inputs } from '@Components/Inputs';

const TempRegisterMember = () => {
  const [postData, setPostData] = useState<string | undefined>('');
  const router = useRouter();

  //backend側にリクエストする
  const handleTempRegisterMember = async () => {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: postData })
    });
    //仮登録完了しました。指定したメールアドレスにメールが届きますのでご確認ください。というページへ飛ぶ
    await router.push({
      pathname: '/register-member/inform-completed-temp-registration-member'
    });
  };

  const handleChangePost = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setPostData(e.target.value);
  };

  return (
    <>
      <Head>
        <title>新規会員登録</title>
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <AuthLayouts>
        <HeadLine className="login-headline" text="新規会員登録" />
        <div className="flex flex-col gap-6 pt-14">
          <Inputs
            inputsTitle="メールアドレス"
            value={postData}
            onChange={handleChangePost}
            className="login-input login-input-cstm"
          />
          <SendAuthInfoBtn onClick={handleTempRegisterMember} text="新規会員登録" />
        </div>
      </AuthLayouts>
    </>
  );
};

export default TempRegisterMember;
