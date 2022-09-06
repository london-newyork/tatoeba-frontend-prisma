import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Tatoe, TatoeBtnHooksProps } from '../types/types';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';
import { useApi } from './useApi';

export const useTatoe = (props: TatoeBtnHooksProps) => {
  const { tId, userId, query_tId } = props;
  // const { userId, query_tId } = props;

  const { api: postTatoeApi } = useApi('/tatoe', { method: 'POST' });
  const { api: getTatoeApi } = useApi(`/users/${userId}/tatoe`, {
    method: 'GET',
  });
  const { api: putTatoeApi } = useApi(`/tatoe/${tId}`, {
    method: 'PUT',
  });
  const { api: deleteTatoeApi } = useApi(`/tatoe/${tId}`, { method: 'DELETE' });
  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);

  const getTatoe = async () => {
    const { data } = await getTatoeApi();
    if (!data) {
      throw Error('データがありません');
    }
  };

  const createTatoe = async (
    value: Pick<Tatoe, 'title' | 'shortParaphrase' | 'description'>
  ) => {
    const { data } = await postTatoeApi(value);
    // あとで消す
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${persistAccessToken}`,
    //   },
    //   body: JSON.stringify({
    //     title,
    //     shortParaphrase,
    //     description,
    //   }),
    // });
    // const { data } = await res.json();
    // フロント側で使えるようにデータ加工
    const formattedData: Tatoe = {
      tId: data.id,
      userId: data.userId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      title: data.title,
      description: data.description,
      shortParaphrase: data.shortParaphrase,
    };
    const newTatoe = [formattedData, ...tatoe];

    setTatoe(newTatoe);
  };

  const updateTatoe = async (
    value: Pick<
      Tatoe,
      'title' | 'shortParaphrase' | 'description' | 'tId' | 'userId'
    >
  ) => {
    const { data } = await putTatoeApi(value);

    const updatedTatoe = tatoe.map((item: Tatoe) => {
      if (item.tId === query_tId) {
        return {
          tId: item.tId,
          userId: data.userId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          title: data.title,
          description: data.description,
          shortParaphrase: data.shortParaphrase,
        };
      }
      return item;
    });

    setTatoe(updatedTatoe);
  };

  const deleteTatoe = async (value: Pick<Tatoe, 'tId'>) => {
    const { data } = await deleteTatoeApi(value);
    console.log('delete data', data);

    const deleteData = tatoe.filter((item: Tatoe) => {
      return item.tId !== data.id;
    });
    setTatoe(deleteData);
  };

  // あとで消す
  // const getUserTatoeList = async () => {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/tatoe`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${persistAccessToken}`,
  //       },
  //     }
  //   );
  //   const { data } = await res.json();
  //   getUserTatoeList();
  //   if (!data) {
  //     throw Error('データがありません');
  //   }
  // };

  // const handleOnClickCreateTatoe = async (): Promise<void> => {
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

  //   if (!query_tId) {
  //     // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe`, {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //     Authorization: `Bearer ${persistAccessToken}`,
  //     //   },
  //     //   body: JSON.stringify({
  //     //     title,
  //     //     shortParaphrase,
  //     //     description,
  //     //   }),
  //     // });
  //     // const { data } = await res.json();
  //     // // フロント側で使えるようにデータ加工
  //     // const formattedData: Tatoe = {
  //     //   tId: data.id,
  //     //   userId: data.userId,
  //     //   createdAt: data.createdAt,
  //     //   updatedAt: data.updatedAt,
  //     //   title: data.title,
  //     //   description: data.description,
  //     //   shortParaphrase: data.shortParaphrase,
  //     // };
  //     // const newTatoe = [formattedData, ...tatoe];

  //     // setTatoe(newTatoe);

  //     router.push({
  //       pathname: '/DashBoard/UserTatoeList',
  //     });
  //   }
  // };

  // const handleOnclickUpdateTatoe = async (): Promise<void> => {
  // const { alertRegisterTatoe, noInputsData } = useAlert({
  //   userId,
  //   user,
  //   title,
  //   shortParaphrase,
  //   description,
  // });
  // if (noInputsData) {
  //   alertRegisterTatoe();
  //   return;
  // }

  // if (query_tId) {
  //   tatoe.map(async (item: Tatoe) => {
  //     if (item.tId === query_tId) {
  //       const tId = item.tId;
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${tId}`,
  //         {
  //           method: 'PUT',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${persistAccessToken}`,
  //           },
  //           body: JSON.stringify({
  //             title,
  //             shortParaphrase,
  //             description,
  //             tId,
  //             createdAt,
  //             updatedAt,
  //           }),
  //         }
  //       );
  //       const { data } = await res.json();
  //       const updatedTatoe = tatoe.map((item: Tatoe) => {
  //         if (item.tId === query_tId) {
  //           return {
  //             tId: item.tId,
  //             userId: data.userId,
  //             createdAt: data.createdAt,
  //             updatedAt: data.updatedAt,
  //             title: data.title,
  //             description: data.description,
  //             shortParaphrase: data.shortParaphrase,
  //           };
  //         }
  //         return item;
  //       });
  //       setTatoe(updatedTatoe);
  //     }
  //   });
  // }
  // };

  // const handleOnClickDeleteTatoe = async (): Promise<void> => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${tId}`,
  //   {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${persistAccessToken}`,
  //     },
  //     body: JSON.stringify({
  //       tId,
  //     }),
  //   }
  // );
  // const { data } = await res.json();
  // const deleteTatoe = tatoe.filter((item) => {
  //   return item.tId !== data.id;
  // });
  // setTatoe(deleteTatoe);
  // };

  return {
    createTatoe,
    updateTatoe,
    deleteTatoe,
    getTatoe,
  };
};
