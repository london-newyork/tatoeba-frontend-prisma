import Head from 'next/head';
import React from 'react';
import { Header } from '../../src/components/Header/Header';

//これは、registrationTokenを含んだURLを踏む=> ユーザーがパスワードとメールアドレスを送った後に表示されるページ
const InformCompletedRegistrationMember = () => {
  return (
    <>
    <Head>
        <title>本登録完了</title>
        <link rel='favicon.ico' />
    </Head>
    <Header/>
      <div
      className="
      w-full
      pt-40
      px-10
      ">
        <p
        className='
        flex
        justify-center
        leading-relaxed
        '
        >
          本登録が完了しました。<br/>
          システムより本登録完了のメールが届く予定ですので、お待ちくださいませ。

        </p>
      </div>
      </>
      );
    };

export default InformCompletedRegistrationMember;
