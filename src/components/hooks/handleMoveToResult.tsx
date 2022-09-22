import { useRouter } from 'next/router';
import { Tatoe } from '../types/types';

export const useHandleMoveToResult = (allUserTatoe: Tatoe[]) => {
  const router = useRouter();

  const handleMoveToResult = (props: Tatoe) => {
    const { tId, title, shortParaphrase, description, userId } = props;

    allUserTatoe.forEach((item: Tatoe) => {
      if (item.tId === tId) {
        router.push({
          pathname: '/SearchResult/[tId]',
          query: {
            tId,
            title,
            shortParaphrase,
            description,
            userId,
          },
        });
      }
      return item;
    });
  };
  return { handleMoveToResult };
};
