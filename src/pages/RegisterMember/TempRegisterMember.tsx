import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { LoginLayouts } from '../../components/Layouts/LoginLayouts';

const TempRegisterMember = () => {
  const [postData, setPostData] = useState<string | undefined>();
  const router = useRouter();

  //backend側にリクエストする
  const handleTempRegisterMember = async () => {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: postData }),
    });
    //仮登録完了しました。指定したメールアドレスにメールが届きますのでご確認ください。というページへ飛ぶ
    await router.push({
      pathname: '/RegisterMember/InformCompletedTempRegistrationMember',
    });
  };

  const handleChangePost = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setPostData(e.target.value);
  };

  return (
    <>
      <Head>
        <title>新規会員登録</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <h1 className='login-headline'>新規会員登録</h1>
        <div className='pt-14 flex flex-col gap-6'>
          <div className='flex flex-col'>
            <p className='login-headline-s'>メールアドレス</p>
            <input
              value={postData}
              className='login-input login-input-cstm'
              onChange={handleChangePost}
            />
          </div>
          <button className='login-btn' onClick={handleTempRegisterMember}>
            新規会員登録
          </button>
        </div>
      </LoginLayouts>
    </>
  );
};

export default TempRegisterMember;
