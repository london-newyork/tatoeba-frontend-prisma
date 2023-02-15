import { useRouter } from 'next/router';
import { SetterOrUpdater } from 'recoil';
import { Tatoe } from '@Types/types';

type CancelProps = {
  tId?: string | string[] | null;
  tatoe: Tatoe[];
  setTatoe: SetterOrUpdater<Tatoe[]>;
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
            updatedAt: item.updatedAt,
            userId: item.userId,
            imageUrl: item.imageUrl,
            imageId: item.imageId,
            formData: item.formData
          };
        } else {
          return item;
        }
      });
      setTatoe(newTatoe);

      tatoe.map((item) => {
        if (item.tId === tId) {
          router.push({
            pathname: '/dashboards/user-tatoe-list'
          });
        }
      });
    }
    router.push({
      pathname: '/dashboards/user-tatoe-list'
    });
  };
  return { handleClickCancel };
};
