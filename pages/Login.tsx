import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../src/components/Header/Header';
import { LoginLayouts } from '../src/components/Layouts/LoginLayouts';
import { useAuth } from '../src/components/hooks/useAuth';

export default function Login() {
  const { login, email, setEmail } = useAuth();
  const router = useRouter();
  // const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
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
        <section
          className='
            bg-gray-100
            h-screen
            px-2
            md:px-0
            mx-auto
            flex
            justify-center
            '
        >
          <div
            className='
                bg-white
                px-7
                pt-20
                pb-7
                rounded-3xl
                border-[1px]
                border-gray-800
                min-w-[24rem]
                md:w-[24rem]
                h-[31.25rem]
                flex
                flex-col
                items-center
                '
          >
            <h1
              className='
                  relative
                  text-3xl
                  text-gray-700
                  select-none
                  font-normal
                  '
            >
              ログイン
            </h1>
            <div className='pt-14 flex flex-col gap-6'>
              <div className='flex flex-col'>
                <p
                  className='
                      pr-2
                      font-normal
                      text-gray-600
                      w-[128px]
                      text-sm
                      pb-2
                      '
                >
                  メールアドレス
                </p>
                <input
                  value={email}
                  className='
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      h-8
                      py-2
                      px-3
                      w-[300px]
                      border
                      border-gray-200
                      rounded-full
                      '
                  onChange={handleChangeEmail}
                />
              </div>
              <div className='flex flex-col'>
                <p
                  className='
                      pr-2
                      text-gray-600
                      w-[128px]
                      text-sm
                      pb-2
                      '
                >
                  パスワード
                </p>
                <input
                  value={password}
                  className='
                        shadow-sm
                        outline-none
                        focus:ring-2
                        focus:ring-offset-3
                        focus:ring-green-100
                        focus:ring-offset-green-50
                        focus:border-green-100
                        focus:placeholder-gray-300
                        h-8
                        py-2
                        px-3
                        w-[300px]
                        border
                        border-gray-200
                        rounded-full
                        '
                  onChange={handleChangePassword}
                />
              </div>
              <button
                className='
                    mt-4
                    mb-4
                    mx-auto
                    p-3
                    w-full
                    rounded-full
                    bg-dark_green
                    text-gray-800
                    text-lg
                    hover:bg-opacity-90
                    font-normal
                    '
                onClick={handleLogin}
              >
                ログイン
              </button>
            </div>
            <Link href='/RegisterMember/TempRegisterMember'>
              <p
                className='
                  mx-auto
                  text-sm
                  text-gray-600
                  '
              >
                新規会員登録
              </p>
            </Link>
          </div>
        </section>
      </LoginLayouts>
    </>
  );
}
