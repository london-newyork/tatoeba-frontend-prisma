import React, { FormEventHandler, useState } from 'react';
import { CreateTatoeBtn } from '../../components/btn/CreateTatoeBtn';
import { RegisterTatoeTitle } from './RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterTatoeShortParaphrase } from './RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeDescription } from './RegisterTatoeChild/RegisterTatoeDescription';

import { CancelTatoeBtn } from '../../components/btn/CancelTatoeBtn';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { TatoeAtom } from '../../components/utils/atoms/TatoeAtom';
import { LoginUserAtom } from '../../components/utils/atoms/LoginUserAtom';
import { UpdateTatoeBtn } from '../../components/btn/UpdateTatoeBtn';
import { useAuth } from '../../components/hooks/useAuth';
import { useUserInfo } from '../../components/hooks/useUserInfo';
import { useTatoe } from '../../components/hooks/useTatoe';
import { useAlert } from '../../components/hooks/useAlert';
import { Tatoe } from '../../components/types/types';
import { RegisterImageForExplanationTatoe } from './RegisterTatoeChild/RegisterImageForExplanationTatoe';
import { ExplanationImageAtom } from '../../components/utils/atoms/ExplanationImageAtom';
import { useApi } from '../../components/hooks/useApi';

export const RegisterTatoeParent = () => {
  const router = useRouter();
  const query = router.query;
  const query_tId = query.tId;
  // stringしか来ないので強引にasで型をつける
  const tId = query.tId as string;

  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [createdAt, setCreatedAt] = useState<string | null>('');
  const [updatedAt, setUpdatedAt] = useState<string | null>('');

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  // const setExplanationImage = useSetRecoilState(ExplanationImageAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);
  // const { api: createTatoeApi } = useApi('/tatoe', { method: 'POST' });

  const { updateTatoe, createTatoe } = useTatoe({
    tId,
    router,
    tatoe,
    user,
    setTatoe,
    persistAccessToken,
    userId,
    title,
    shortParaphrase,
    description,
    query_tId,
    createdAt,
    updatedAt,
  });

  // const handleOnClickCreateTatoe = async () => {
  //   if (!query_tId) {
  //     // データのバリデーションを行う
  //     const { alertRegisterTatoe, noInputsData } = useAlert({
  //       userId,
  //       user,
  //       title,
  //       shortParaphrase,
  //       description,
  //     });
  //     if (noInputsData) {
  //       alertRegisterTatoe();
  //       return;
  //     }
  //     await createTatoe({ title, shortParaphrase, description });

  //     router.push({
  //       pathname: '/DashBoard/UserTatoeList',
  //     });
  //   }
  // };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    /* POST */

    // handleOnClickCreateTatoe の中身
    if (!query_tId) {
      // データのバリデーションを行う
      const { alertRegisterTatoe, noInputsData } = useAlert({
        userId,
        user,
        title,
        shortParaphrase,
        description,
      });
      if (noInputsData) {
        alertRegisterTatoe();
        return;
      }
      const formData = new FormData(e.currentTarget);
      await createTatoe({ title, shortParaphrase, description, formData });

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }

    /* PUT */

    // 更新したはずの画像がストレージには来てない
    //  (handleOnclickUpdateTatoe の中身)

    if (query_tId) {
      const { alertRegisterTatoe, noInputsData } = useAlert({
        userId,
        user,
        title,
        shortParaphrase,
        description,
      });
      if (noInputsData) {
        alertRegisterTatoe();
        return;
      }
      const formData = new FormData(e.currentTarget);
      // console.log('=====@RegisterTatoeParent UPDATE formData', formData); // ない
      formData.forEach((value, key) => {
        console.log(`FormData[${key}] = ${value}`);
      }); // ある

      // // formDataがカラなので、ひとつひとつ定義
      // const formTitle = formData.get('title') as string;
      // const formDescription = formData.get('description') as string;
      // const formShortParaphrase = formData.get('shortParaphrase') as string;
      // const formImage = formData.get('image') as File;
      // console.log('=====@RegisterTatoeParent formImage', formImage); // ある

      // tatoe.map(async (item: Tatoe) => {
      //   if (item.tId === query_tId) {
      //     const tId = item.tId;
      await updateTatoe({
        // title: formTitle,
        // shortParaphrase: formShortParaphrase,
        // description: formDescription,
        tId: query_tId,
        // userId,
        // formImage,
        formData,
      });
      //   }
      // });
      // tatoe.map((item: Tatoe) => {
      //   if (item.tId === query_tId) {
      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
      //   }
      // });
    }
  };

  // const handleOnclickUpdateTatoe = async () => {
  //   const { alertRegisterTatoe, noInputsData } = useAlert({
  //     userId,
  //     user,
  //     title,
  //     shortParaphrase,
  //     description,
  //   });
  //   if (noInputsData) {
  //     alertRegisterTatoe();
  //     return;
  //   }

  //   if (query_tId) {
  //     tatoe.map(async (item: Tatoe) => {
  //       if (item.tId === query_tId) {
  //         const tId = item.tId;
  //         await updateTatoe({
  //           title,
  //           shortParaphrase,
  //           description,
  //           tId,
  //           userId,
  //         });
  //       }
  //     });
  //   }
  //   tatoe.map((item: Tatoe) => {
  //     if (item.tId === query_tId) {
  //       router.push({
  //         pathname: '/DashBoard/UserTatoeList',
  //       });
  //     }
  //   });
  // };

  // TODO 削除 後で削除
  const handleClickDeleteImage = async () => {
    //
    // await fetch(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${tId}/explanation_image`,
    //   {
    //     method: 'DELETE',
    //     headers: {
    //       Authorization: `Bearer ${persistAccessToken}`,
    //     },
    //   }
    // );
  };

  return (
    <form className='flex flex-col gap-6' onSubmit={handleOnSubmit}>
      <RegisterTatoeTitle query={query} title={title} setTitle={setTitle} />
      <RegisterTatoeShortParaphrase
        query={query}
        shortParaphrase={shortParaphrase}
        setShortParaphrase={setShortParaphrase}
      />
      <RegisterTatoeDescription
        query={query}
        description={description}
        setDescription={setDescription}
      />
      <RegisterImageForExplanationTatoe
        query={query}
        query_tId={query.tId}
        userId={userId}
        persistAccessToken={persistAccessToken}
        // 後で消す
        // onSubmit={handleOnSubmit}
      />
      <div className='mx-auto md:mx-0 md:justify-end pt-6 flex flex-col smd:flex-row gap-6'>
        <CancelTatoeBtn query_tId={query.tId} />
        <CreateTatoeBtn
          tatoe={tatoe}
          query_tId={query.tId}
          createdAt={createdAt}
          updatedAt={updatedAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
          // onClick={handleOnClickCreateTatoe}
        />
        <UpdateTatoeBtn
          tatoe={tatoe}
          query_tId={query.tId}
          createdAt={createdAt}
          updatedAt={updatedAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
          // onClick={handleOnclickUpdateTatoe}
        />
      </div>
    </form>
  );
};
