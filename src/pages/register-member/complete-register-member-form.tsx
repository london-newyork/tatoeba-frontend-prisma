import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SendAuthInfoBtn } from '../../commons/components/btn/SendAuthInfoBtn';
import { Header } from '../../commons/components/header/Header';
import { HeadLine } from '../../commons/components/HeadLine';
import { AuthLayouts } from '../../layouts/AuthLayouts';
import { Inputs } from '../../commons/components/Inputs';

const CompleteRegisterMemberForm = () => {
  // eslint-disable-next-line
  const [confirmRegistrations, setConfirmRegistrations] = useState([]);
  const [password, setPassWord] = useState<string | undefined>();
  // eslint-disable-next-line
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

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setPassWord(e.target.value);
  };

  //Backend側へパスワードとトークンを送る
  const handleSendPassword = async () => {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/set_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, token: router.query.token })
    });
    await router.push('/register-member/inform-completed-registration-member');
  };

  return (
    <div>
      <Head>
        <title>新規会員登録</title>
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <AuthLayouts>
        <HeadLine className="login-headline" text="新規会員登録完了手続き" />
        <div className="flex flex-col gap-6 pt-14">
          <Inputs
            inputsTitle="新規パスワード"
            value={password}
            onChange={handleChangePassword}
            className="login-input login-input-cstm"
          />
          <SendAuthInfoBtn onClick={handleSendPassword} text="登録を完了する" />
        </div>
      </AuthLayouts>
    </div>
  );
};

export default CompleteRegisterMemberForm;
