import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '@Components/header/Header';
import { AuthLayouts } from '@Layouts/AuthLayouts';
import { Inputs } from '@Components/Inputs';
import { SendAuthInfoBtn } from '@Components/btn/SendAuthInfoBtn';
import { RegisterAuthInfoBtn } from '@Components/btn/RegisterAuthInfoBtn';
import { HeadLine } from '@Components/HeadLine';
import { useAuth } from '@Features/auth/hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
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
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <AuthLayouts>
        <HeadLine text="ログイン" className="login-headline" />
        <div className="pt-14 flex flex-col gap-6">
          <Inputs
            inputsTitle="メールアドレス"
            value={email}
            onChange={handleChangeEmail}
            className="login-input login-input-cstm"
          />
          <Inputs
            inputsTitle="パスワード"
            value={password}
            onChange={handleChangePassword}
            className="login-input login-input-cstm"
          />
          <SendAuthInfoBtn onClick={handleLogin} text="ログイン" />
        </div>
        <div className="flex gap-x-5">
          <RegisterAuthInfoBtn href="/register-member/temp-register-member" title="新規会員登録" />
          <RegisterAuthInfoBtn href="/reset-password" title="パスワード再設定" />
        </div>
      </AuthLayouts>
    </>
  );
}
