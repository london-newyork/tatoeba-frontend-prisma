import { useRecoilState } from 'recoil';
import { Tatoe, TatoeBtnHooksProps } from '../types/types';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';
import { useApi } from './useApi';

export const useTatoe = (props: TatoeBtnHooksProps) => {
  const { tId, userId, query_tId } = props;
  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);

  // const { api: postTatoeApi } = useApi('/tatoe', { method: 'POST' });
  const { api: createTatoeApi } = useApi('/tatoe', { method: 'POST' });
  const { api: getTatoeApi } = useApi(`/users/${userId}/tatoe`, {
    method: 'GET',
  });
  const { api: putTatoeApi } = useApi(`/tatoe/${tId}`, {
    method: 'PUT',
  });
  const { api: deleteTatoeApi } = useApi(`/tatoe/${tId}`, { method: 'DELETE' });

  const getTatoe = async () => {
    const { data } = await getTatoeApi();

    const newData = data.map((item: any) => {
      return {
        tId: item.id,
        userId: item.userId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        title: item.title,
        description: item.description,
        shortParaphrase: item.shortParaphrase,
      };
    });

    const sortedData = newData.sort((a: Tatoe, b: Tatoe) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    });

    setTatoe(sortedData);

    if (!data) {
      throw Error('データがありません');
    }
  };

  const createTatoe = async (
    value: Pick<Tatoe, 'title' | 'shortParaphrase' | 'description' | 'formData'>
  ) => {
    console.log(value);

    // あとで消す
    // const { data } = await postTatoeApi(value);
    const { data } = await createTatoeApi(value.formData);
    console.log('RES DATA: ', data); // ある
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

    const deleteData = tatoe.filter((item: Tatoe) => {
      return item.tId !== data.id;
    });
    setTatoe(deleteData);
  };

  return {
    createTatoe,
    updateTatoe,
    deleteTatoe,
    getTatoe,
  };
};
