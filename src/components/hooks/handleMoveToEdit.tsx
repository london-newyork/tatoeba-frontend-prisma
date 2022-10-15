import { useRouter } from 'next/router';
import { Tatoe } from '../types/types';

export const useHandleMoveToEdit = ({ tId }: Tatoe) => {
  const router = useRouter();
  const handleMoveToEdit = () => {
    router.push(`/Register/${tId}/`);
  };
  return { handleMoveToEdit };
};
