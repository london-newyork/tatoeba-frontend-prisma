import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Tatoe } from '../types/types';

export const useHandleMoveToEdit = ({
  tId,
  title,
  shortParaphrase,
  description,
}: Tatoe) => {
  const router = useRouter();
  const handleMoveToEdit = () => {
    console.log('@useHandleMoveToEdit tId +++ : ', tId); // undefined

    router.push({
      pathname: '/Register/',
      query: {
        tId,
        title,
        shortParaphrase,
        description,
      },
    });
  };
  return { handleMoveToEdit };
};
