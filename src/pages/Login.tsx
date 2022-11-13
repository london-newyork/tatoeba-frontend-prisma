import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { LoginLayouts } from '../components/Layouts/LoginLayouts';
import { useAuth } from '../components/hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setPassword(e.target.value);
  };

  //Backend側へパスワードとメールアドレスを送る

  const handleLogin = async () => {
    login(email, password);
    await router.push(`/DashBoard`);
  };

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 ログインページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <h1 className='login-headline'>ログイン</h1>
        <div className='pt-14 flex flex-col gap-6'>
          <div className='flex flex-col'>
            <p className='login-headline-s'>メールアドレス</p>
            <input
              value={email}
              className='login-input login-input-cstm
                      '
              onChange={handleChangeEmail}
            />
          </div>
          <div className='flex flex-col'>
            <p className='login-headline-s'>パスワード</p>
            <input
              value={password}
              className='login-input login-input-cstm'
              onChange={handleChangePassword}
            />
          </div>
          <button
            className='
                    mt-4
                    mb-4
                    login-btn
                    '
            onClick={handleLogin}
          >
            ログイン
          </button>
        </div>
        <Link href='/register-member/temp-register-member'>
          <p
            className='
                  mx-auto
                  text-sm
                  text-gray-600
                  cursor-pointer
                  '
          >
            新規会員登録
          </p>
        </Link>
      </LoginLayouts>
    </>
  );
}
