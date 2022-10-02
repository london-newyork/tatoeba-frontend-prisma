import { useRouter } from 'next/router';
import { Tatoe } from '../types/types';

export const useHandleMoveToEdit = ({
  tId,
  title,
  shortParaphrase,
  description,
  imageId,
  imageUrl,
}: Tatoe) => {
  const router = useRouter();
  const handleMoveToEdit = () => {
    router.push({
      pathname: '/Register/',
      query: {
        tId,
        title,
        shortParaphrase,
        description,
        imageId,
        imageUrl,
      },
    });
  };
  return { handleMoveToEdit };
};
