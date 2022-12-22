import { useRouter } from 'next/router';
import { Tatoe } from '@Types/types';

export const useRouting = () => {
  const router = useRouter();
  const handleMoveToEdit = ({ tId }: Tatoe) => {
    router.push(`/register/${tId}/`);
  };
  return { handleMoveToEdit };
};
