import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { LoginLayouts } from '../../components/Layouts/LoginLayouts';

const CompleteRegisterMemberForm = () => {
  const [confirmRegistrations, setConfirmRegistrations] = useState([]);
  const [password, setPassWord] = useState<string | undefined>();
  const [token, setToken] = useState<string | undefined | string[]>();
  const router = useRouter();

  //バックエンドからきたレスポンスをもとにtokenを抽出
  useEffect(() => {
    const fetchRegistrationsComplete = async () => {
      //バックエンドのURLをかいてバックエンドからtokenを抽出
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
      const data = await response.json();

      setConfirmRegistrations(data.registrations);
      //ユーザーがアクセスしたURLからトークンを抽出（バックエンド側でのPOSTのレスポンスの中のregistrationsTokenを、フロントで下記のように抽出することもできる）
      //const registrationsToken = data.registrationToken
      const newToken = router.query.token;

      setToken(newToken);
    };
    fetchRegistrationsComplete();
  }, []);

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setPassWord(e.target.value);
  };

  //Backend側へパスワードとトークンを送る
  const handleSendPassword = async () => {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/set_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token: router.query.token }),
    });
    await router.push(`/RegisterMember/InformCompletedRegistrationMember`);
  };

  return (
    <div>
      <Head>
        <title>新規会員登録</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <h1 className='login-headline'>新規会員登録完了手続き</h1>
        <p className='pt-10 text-gray-400'>パスワードを入力してください</p>
        <div className='pt-14 flex flex-col gap-6'>
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
            onClick={handleSendPassword}
          >
            登録を完了する
          </button>
        </div>
      </LoginLayouts>
    </div>
  );
};

export default CompleteRegisterMemberForm;
