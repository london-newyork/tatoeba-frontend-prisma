import { useRecoilState } from 'recoil';
import { Tatoe } from '../types/types';
import { AllUserTatoeAtom } from '../utils/atoms/AllUserTatoeAtom';
import { useApi } from './useApi';

export const useGetUserTatoeApi = (filteredTatoe?: Tatoe[]) => {
  const { api: getAllUserTatoesApi } = useApi(`/tatoe`, {
    method: 'GET',
  });

  const [allUserTatoe, setAllUserTatoe] = useRecoilState(AllUserTatoeAtom);

  const getAllUserTatoe = async () => {
    const { tatoe } = await getAllUserTatoesApi();

    const formattedTatoe = tatoe.map((item: any) => {
      const formattedData = {
        tId: item.id,
        userId: item.userId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        title: item.title,
        description: item.description,
        shortParaphrase: item.shortParaphrase,
      };
      return formattedData;
    });
    setAllUserTatoe(formattedTatoe);
  };

  const getEachTatoe = async () => {
    if (!filteredTatoe) return;
    const { api: getEachTatoeApi } = useApi(
      `/tatoe/${filteredTatoe[0]['tId']}`,
      {
        method: 'GET',
      }
    );
    const { tatoe } = await getEachTatoeApi();

    const formattedTatoe: Tatoe[] = tatoe.map((item: any) => {
      const formattedData = {
        tId: item.id,
        userId: item.userId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        title: item.title,
        description: item.description,
        shortParaphrase: item.shortParaphrase,
      };
      return formattedData;
    });
    setAllUserTatoe(formattedTatoe);
  };
  return { getAllUserTatoe, getEachTatoe, allUserTatoe };
};
