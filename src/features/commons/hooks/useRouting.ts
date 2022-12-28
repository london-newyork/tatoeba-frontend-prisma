import { useRouter } from 'next/router';
import { Tatoe } from '@Types/types';

export const useRouting = () => {
  const router = useRouter();
  const handleMoveToEdit = ({ tId }: Tatoe) => {
    router.push(`/registers/${tId}/`);
  };
  return { handleMoveToEdit };
};
