import { useRouter } from 'next/router';
import { Tatoe } from '@Types/types';

export const useRouting = () => {
  const router = useRouter();
  const handleMoveToEdit = ({ tId }: Pick<Tatoe, 'tId'>) => {
    router.push(`/registers/${tId}/`);
  };
  return { handleMoveToEdit };
};
