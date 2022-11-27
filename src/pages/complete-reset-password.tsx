import { Header } from '../commons/components/header/Header';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// ログインした時のみこのページにアクセスできるようにする
const CompleteResetPassword = () => {
  const [now] = useState(Date.now());
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5 * 1000);

    //クリーンアップ
    return () => {
      clearTimeout(timer);
    };
  }, [now]);
  return (
    <div>
      <Head>
        <title>Tatoeba 例え話 パスワード再設定成功ページ</title>
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <div
        className="
            w-full
            pt-40
            px-10
            "
      >
        <p
          className="
                flex
                justify-center
                leading-relaxed
                "
        >
          パスワード再設定が完了しました。
          <br />
          トップページに移ります。
        </p>
      </div>
    </div>
  );
};

export default CompleteResetPassword;
