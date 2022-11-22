import { useRecoilState } from 'recoil';
import { AllUserTatoe, Tatoe } from '../types/types';
import { AllUserTatoeAtom } from '../utils/atoms/AllUserTatoeAtom';
import { useApi } from './useApi';

export const useGetUserTatoeApi = (filteredTatoe?: Tatoe[]) => {
  const { api: getAllUserTatoesApi } = useApi(`/tatoe`, {
    method: 'GET'
  });

  const [allUserTatoe, setAllUserTatoe] = useRecoilState(AllUserTatoeAtom);

  const getAllUserTatoe = async () => {
    const { data } = await getAllUserTatoesApi();

    const formattedTatoe = data.map((item: any) => {
      const formattedData = {
        tId: item.id,
        userId: item.userId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        title: item.title,
        description: item.description,
        shortParaphrase: item.shortParaphrase,
        userName: item.user.userName,
        imageUrl: item.imageUrl
      };
      return formattedData;
    });
    setAllUserTatoe(formattedTatoe);
  };

  // Search Resultで使用
  const getEachTatoe = async () => {
    if (!filteredTatoe) return;
    const { api: getEachTatoeApi } = useApi(`/tatoe/${filteredTatoe[0]['tId']}`, {
      method: 'GET'
    });
    const { tatoe } = await getEachTatoeApi();

    const formattedTatoe: AllUserTatoe[] = tatoe.map((item: any) => {
      const formattedData = {
        tId: item.id,
        userId: item.userId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        title: item.title,
        description: item.description,
        shortParaphrase: item.shortParaphrase,
        imageId: item.imageId,
        imageUrl: item.imageUrl,
        userName: item.user.userName
      };
      return formattedData;
    });
    setAllUserTatoe(formattedTatoe);
  };

  return { getAllUserTatoe, getEachTatoe, allUserTatoe };
};
