import { useRecoilState } from 'recoil';
import { Tatoe, TatoeBtnHooksProps } from '../../../../types/types';
import { TatoeAtom } from '../../../../utils/atoms/TatoeAtom';
import { useApi } from '../../../../hooks/useApi';

export const useTatoe = (props: TatoeBtnHooksProps) => {
  const { tId, userId } = props;
  const [tatoe, setTatoe] = useRecoilState(TatoeAtom);

  const { api: postTatoeApi } = useApi('/tatoe', { method: 'POST' });
  const { api: getTatoeApi } = useApi(`/users/${userId}/tatoe`, {
    method: 'GET'
  });
  const { api: putTatoeApi } = useApi(`/tatoe/${tId}`, {
    method: 'PUT'
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
        imageUrl: item.imageUrl,
        imageId: item.imageId
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

  const createTatoe = async (value: Pick<Tatoe, 'title' | 'shortParaphrase' | 'description' | 'formData'>) => {
    const { data } = await postTatoeApi(value.formData);
    const formattedData: Tatoe = {
      tId: data.id,
      userId: data.userId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      title: data.title,
      description: data.description,
      shortParaphrase: data.shortParaphrase,
      imageUrl: data.imageUrl,
      imageId: data.imageId
    };
    const newTatoe = [formattedData, ...tatoe];
    setTatoe(newTatoe);
  };

  const updateTatoe = async (value: Pick<Tatoe, 'tId' | 'userId' | 'formData'>) => {
    const { data } = await putTatoeApi(value.formData);

    const updatedTatoe = tatoe.map((item: Tatoe) => {
      if (item.tId === tId) {
        return {
          tId: item.tId,
          userId: data.userId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          title: data.title,
          description: data.description,
          shortParaphrase: data.shortParaphrase,
          imageId: data.imageId,
          imageUrl: data.imageUrl
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
    getTatoe
  };
};
