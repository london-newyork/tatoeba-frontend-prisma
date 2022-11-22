import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../../../features/header/components/Header';
import { RegisterTatoeHeadline } from '../../../features/register/components/RegisterTatoeHeadline';
import { UpdateTatoePage } from '../UpdateTatoePage';
import { useRouter } from 'next/router';

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
          md:pt-[100px]
          pt-[80px]
          px-7
          md:px-18
          mx-auto
          mb-12
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
