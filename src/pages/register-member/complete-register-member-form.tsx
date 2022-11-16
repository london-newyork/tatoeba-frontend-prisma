import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SendAuthInfoBtn } from '../../components/btn/SendAuthInfoBtn';
import { Header } from '../../components/Header/Header';
import { HeadLine } from '../../components/HeadLine';
import { LoginLayouts } from '../../components/Layouts/LoginLayouts';
import { AuthInputs } from '../../components/Auth/AuthInputs';

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
    await router.push(`/register-member/inform-completed-registration-member`);
  };

  return (
    <div>
      <Head>
        <title>新規会員登録</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <HeadLine style='login-headline' text='新規会員登録完了手続き' />
        <div className='pt-14 flex flex-col gap-6'>
          <AuthInputs
            inputsTitle='新規パスワード'
            value={password}
            onChange={handleChangePassword}
          />
          <SendAuthInfoBtn onClick={handleSendPassword} text='登録を完了する' />
        </div>
      </LoginLayouts>
    </div>
  );
};

export default CompleteRegisterMemberForm;
