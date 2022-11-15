import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { LoginLayouts } from '../components/Layouts/LoginLayouts';
import { useAuth } from '../components/hooks/useAuth';
import { LoginInputs } from '../components/Login/LoginInputs';
import { LoginBtn } from '../components/btn/LoginBtn';
import { LoginInfoRegisterBtn } from '../components/btn/LoginInfoRegisterBtn';
import { HeadLine } from '../components/HeadLine';

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
    await router.push(`/dashboard`);
  };

  return (
    <>
      <Head>
        <title>Tatoeba 例え話 ログインページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <HeadLine text='ログイン' style='login-headline' />
        <div className='pt-14 flex flex-col gap-6'>
          <LoginInputs
            inputsTitle='メールアドレス'
            value={email}
            onChange={handleChangeEmail}
          />
          <LoginInputs
            inputsTitle='パスワード'
            value={password}
            onChange={handleChangePassword}
          />
          {/* TODO:ログインボタン？？適切な名前に変更したい。他でも使ってるので */}
          <LoginBtn onClick={handleLogin} text='ログイン' />
        </div>
        <div className='flex gap-x-4'>
          <LoginInfoRegisterBtn
            href='/register-member/temp-register-member'
            title='新規会員登録'
          />
          <LoginInfoRegisterBtn
            href='/reset-password'
            title='パスワード再設定'
          />
        </div>
      </LoginLayouts>
    </>
  );
}
