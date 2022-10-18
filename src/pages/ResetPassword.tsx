import { Header } from '../components/Header/Header';
import { LoginLayouts } from '../components/Layouts/LoginLayouts';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { LoginUserAtom } from '../components/utils/atoms/LoginUserAtom';

const ResetPassword = () => {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // TODO usePersistAccessTokenの使い所確認
  const persistAccessToken = useRecoilValue(LoginUserAtom);

  const handleChangeCurrentPassword = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setCurrentPassword(e.target.value);
  };

  const handleChangeNewPassword = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setConfirmPassword(e.target.value);
  };
  //ここにパスワード再設定を書く
  const handleResetPassword = async () => {
    if (!currentPassword || !newPassword) {
      alert('パスワードが入力されていません');
      return;
    }
    // パスワード確認失敗
    if (!(newPassword === confirmPassword)) {
      alert('パスワードが一致していません');
      return;
    }

    // API側に現在のパスワードと新しいパスワードを送る
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/password_reset`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistAccessToken}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      }
    );
    await res.json();

    //パスワード再設定完了ページへ飛ぶ
    await router.push('/complete_reset_password');
  };

  return (
    <div>
      <Head>
        <title>Tatoeba 例え話 パスワード再設定ページ</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <h1
          className='
              pt-8
              login-headline
              '
        >
          パスワード再設定
        </h1>
        <div className='pt-10 flex flex-col gap-6'>
          <div className='flex flex-col'>
            <p className='login-headline-s'>現在のパスワード</p>
            <input
              value={currentPassword}
              className='login-input login-input-cstm'
              onChange={handleChangeCurrentPassword}
            />
          </div>
          <div className='flex flex-col'>
            <p className='login-headline-s'>新パスワード</p>
            <input
              value={newPassword}
              className='
              login-input login-input-cstm'
              onChange={handleChangeNewPassword}
            />
          </div>
          <div className='flex flex-col'>
            <p className='login-headline-s'>新パスワード確認</p>
            <input
              value={confirmPassword}
              className='login-input login-input-cstm'
              onChange={handleChangeConfirmPassword}
            />
          </div>
          <button
            className='
                        mt-4
                        mb-4
                        login-btn
                        '
            onClick={handleResetPassword}
          >
            パスワード再設定
          </button>
        </div>
      </LoginLayouts>
    </div>
  );
};

export default ResetPassword;
