import { Tatoe, TatoeBtnHooksProps } from '../types/types';
import { useAlert } from './useAlert';

export const useTatoe = (props: TatoeBtnHooksProps) => {
  const {
    router,
    setTatoe,
    tatoe,
    userId,
    user,
    title,
    shortParaphrase,
    description,
    query_tId,
    persistAccessToken,
    createdAt,
    updatedAt,
  } = props;

  const handleOnClickCreateTatoe = async (): Promise<void> => {
    const { alertRegisterTatoe, noInputsData } = useAlert({
      userId,
      user,
      title,
      shortParaphrase,
      description,
    });
    if (noInputsData) {
      alertRegisterTatoe();
      return;
    }

    if (!query_tId) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistAccessToken}`,
        },
        body: JSON.stringify({
          title,
          shortParaphrase,
          description,
        }),
      });
      const { data } = await res.json();
      // フロント側で使えるようにデータ加工
      const formattedData: Tatoe = {
        tId: data.id,
        userId: data.userId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        title: data.title,
        description: data.description,
        shortParaphrase: data.shortParaphrase,
      };
      const newTatoe = [formattedData, ...tatoe];

      setTatoe(newTatoe);

      router.push({
        pathname: '/DashBoard/UserTatoeList',
      });
    }
  };

  const handleOnclickUpdateTatoe = async (): Promise<void> => {
    const { alertRegisterTatoe, noInputsData } = useAlert({
      userId,
      user,
      title,
      shortParaphrase,
      description,
    });
    if (noInputsData) {
      alertRegisterTatoe();
      return;
    }

    // 例え更新のロジックを書く
    if (query_tId) {
      tatoe.map(async (item: Tatoe) => {
        if (item.tId === query_tId) {
          const tId = item.tId;
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${tId}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${persistAccessToken}`,
              },
              body: JSON.stringify({
                title,
                shortParaphrase,
                description,
                tId,
                createdAt,
                updatedAt,
              }),
            }
          );
          const { data } = await res.json();

          const updatedTatoe = tatoe.map((item: Tatoe) => {
            if (item.tId === query_tId) {
              return {
                tId: item.tId,
                userId: data.userId,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
                title: data.title,
                description: data.description,
                shortParaphrase: data.shortParaphrase,
              };
            }
            return item;
          });

          setTatoe(updatedTatoe);
        }
      });
    }
  };
  return { handleOnClickCreateTatoe, handleOnclickUpdateTatoe };
};
