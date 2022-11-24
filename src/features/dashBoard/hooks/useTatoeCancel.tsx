import { useRouter } from 'next/router';
import { SetterOrUpdater } from 'recoil';
import { Tatoe } from '../../../types/types';

type CancelProps = {
  tId?: string | string[];
  tatoe?: Tatoe[];
  setTatoe?: SetterOrUpdater<Tatoe[]>;
};

export const useTatoeCancel = ({ tId, tatoe, setTatoe }: CancelProps) => {
  const router = useRouter();

  const handleClickCancel = () => {
    if (tId) {
      const newTatoe = tatoe.map((item) => {
        if (item.tId === tId) {
          return {
            tId: item.tId,
            title: item.title,
            shortParaphrase: item.shortParaphrase,
            description: item.description,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          };
        } else {
          return item;
        }
      });
      setTatoe(newTatoe);

      tatoe.map((item) => {
        if (item.tId === tId) {
          router.push({
            pathname: '/dashboard/user-tatoe-list'
          });
        }
      });
    }
    router.push({
      pathname: '/dashboard/user-tatoe-list'
    });
  };
  return { handleClickCancel };
};
