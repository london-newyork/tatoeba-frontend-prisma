import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '@Components/header/Header';
import { RegisterTatoeHeadline } from '@Components/register/RegisterTatoeHeadline';

import { useRouter } from 'next/router';
import UpdateTatoePage from '../UpdateTatoePage';

export default function Register() {
  const router = useRouter();

  const { tId } = router.query;
  console.log(tId);

  const handleCreateTatoe = async () => {
    router.push({
      pathname: '/dashboard/user-tatoe-list'
    });
  };
  return (
    <>
      <Head>
        <title>Tatoeba 例え話 更新ページ</title>
        <link rel="favicon.ico" />
      </Head>
      <Header />
      <section
        className="
          mx-auto
          mb-12
          px-7
          pt-[80px]
          md:px-16
          md:pt-[100px]
          "
      >
        <div
          className="
              frame-large
              mx-auto
              max-w-[1000px]
              "
        >
          <RegisterTatoeHeadline />

          {tId && <UpdateTatoePage tId={tId} onCreateTatoe={handleCreateTatoe} />}
        </div>
      </section>
    </>
  );
}
