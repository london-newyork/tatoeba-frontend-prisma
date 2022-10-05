import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { CreateTatoeBtn } from '../../components/btn/CreateTatoeBtn';
import { RegisterTatoeTitle } from './RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterTatoeShortParaphrase } from './RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeDescription } from './RegisterTatoeChild/RegisterTatoeDescription';

import { CancelTatoeBtn } from '../../components/btn/CancelTatoeBtn';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TatoeAtom } from '../../components/utils/atoms/TatoeAtom';
import { LoginUserAtom } from '../../components/utils/atoms/LoginUserAtom';
import { UpdateTatoeBtn } from '../../components/btn/UpdateTatoeBtn';
import { useAuth } from '../../components/hooks/useAuth';
import { useUserInfo } from '../../components/hooks/useUserInfo';
import { useTatoe } from '../../components/hooks/useTatoe';
import { useAlert } from '../../components/hooks/useAlert';
import { Tatoe } from '../../components/types/types';
import { RegisterImageForExplanationTatoe } from './RegisterTatoeChild/RegisterImageForExplanationTatoe';
import { useApi } from '../../components/hooks/useApi';
import { useBeforeUnload } from 'react-use';

export const RegisterTatoeParent = () => {
  /* TODO:
   * tatoeがAPIから取得され、それをどう展開するのか　tatoeは常に取得される。
   * でも 今の例えも入力したい。
   * tatoe.map(item => {
   * return (
   *  <title title={item.title? item.title : title}></title> => ×
   *  これだと item.title が tatoe に登録されているかぎり item.title が表示され入力ができな*  い
   * )
   * })
   *
   *
   *
   *
   */

  const router = useRouter();
  const query = router.query;
  const query_tId = query.tId as string;
  // stringしか来ないので強引にasで型をつける
  const tId = query.tId as string;
  // const imageId = query.imageId as string;

  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const [createdAt, setCreatedAt] = useState<string | null>('');
  const [updatedAt, setUpdatedAt] = useState<string | null>('');

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string | null>(null);

  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);
  const persistAccessToken = useRecoilValue(LoginUserAtom);
  const { userId } = useAuth();
  const { user } = useUserInfo(userId);

  console.log('一番上のtatoe', tatoe);

  const { api: deleteTatoeImageApi } = useApi(
    `/tatoe/${query_tId}/explanation_image`,
    { method: 'DELETE' }
  );
  const { getTatoe } = useTatoe({
    userId,
    tatoe,
    router,
    user,
    setTatoe,
    persistAccessToken,
  });

  useEffect(() => {
    const getUserTatoeList = async () => {
      await getTatoe();
    };
    getUserTatoeList();
  }, [query_tId]);

  useEffect(() => {
    tatoe.map((item: Tatoe) => {
      if (item.tId === query_tId) {
        console.log('item.imageUrl', item.imageUrl);
        console.log('item.title', item.title);

        setImageUrl(item.imageUrl);
        setTitle(item.title);
      }
    });
  }, [query_tId]);

  // const reload = () => {
  //   const showAlert = true;
  //   const message = '入力した内容がキャンセルされますがよろしいでしょうか？';
  //   useBeforeUnload(showAlert, message);
  //   useEffect(() => {
  //     const confirm = () => {
  //       alert('更新します');
  //     };
  //     router.events.on('routeChangeStart', confirm);

  //     return () => {
  //       router.events.off('routeChangeStart', confirm);
  //     };
  //   }, []);
  // };

  // reload();

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

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    /* POST */

    if (!query_tId) {
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

      await createTatoe({
        title,
        shortParaphrase,
        description,
        formData,
      });

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }

    /* PUT */

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
      await updateTatoe({
        tId: query_tId as string,
        userId,
        formData,
      });

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }
  };

  /* DELETE */
  const handleDeleteExplanationImage: MouseEventHandler<
    HTMLButtonElement
  > = async (e) => {
    e.preventDefault();
    if (!defaultImageUrl && !imageUrl) {
      return;
    }
    await deleteTatoeImageApi();

    setImageUrl(null);
    URL.revokeObjectURL(defaultImageUrl);
    setDefaultImageUrl(null);
  };

  console.log('下のtitle', title); // ない
  console.log('imageUrl', imageUrl); // null

  return (
    <form className='flex flex-col gap-6' onSubmit={handleOnSubmit}>
      <>
        <RegisterTatoeTitle
          query_tId={query_tId}
          title={title}
          setTitle={setTitle}
        />
        <RegisterTatoeShortParaphrase
          query_tId={query_tId}
          shortParaphrase={shortParaphrase}
          setShortParaphrase={setShortParaphrase}
        />
        <RegisterTatoeDescription
          query_tId={query_tId}
          description={description}
          setDescription={setDescription}
        />
        <RegisterImageForExplanationTatoe
          query_tId={query_tId}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
          defaultImageUrl={defaultImageUrl}
          setDefaultImageUrl={setDefaultImageUrl}
          deleteExplanationImage={handleDeleteExplanationImage}
        />
        <div className='mx-auto md:mx-0 md:justify-end pt-6 flex flex-col smd:flex-row gap-6'>
          <CancelTatoeBtn query_tId={query_tId} />
          <CreateTatoeBtn
            tatoe={tatoe}
            query_tId={query_tId}
            createdAt={createdAt}
            updatedAt={updatedAt}
            title={title}
            shortParaphrase={shortParaphrase}
            description={description}
          />
          <UpdateTatoeBtn
            tatoe={tatoe}
            query_tId={query_tId}
            createdAt={createdAt}
            updatedAt={updatedAt}
            title={title}
            shortParaphrase={shortParaphrase}
            description={description}
          />
        </div>
      </>
    </form>
  );
};
