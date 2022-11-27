import Head from 'next/head';
import React from 'react';
import { Header } from '../../commons/components/header/Header';

const InformCompletedTempRegistrationMember = () => {
  return (
    <>
      <Head>
        <title>新規仮会員登録完了</title>
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <div
        className="
      w-full
      px-10
      pt-40
      "
      >
        <p
          className="
        flex
        justify-center
        leading-relaxed
        "
        >
          仮登録が完了しました。
          <br />
          システムより仮登録完了のメールが届く予定ですので、お待ちくださいませ。
        </p>
      </div>
    </>
  );
};

export default InformCompletedTempRegistrationMember;
