import { TatoeBtnHooksProps } from '../types/types';

export const useAlert = (
  props: Pick<TatoeBtnHooksProps, 'userId' | 'user' | 'title' | 'shortParaphrase' | 'description'>
) => {
  const { userId, user, title, shortParaphrase, description } = props;

  const noInputsData = !userId || !user || !title || !shortParaphrase || !description;

  const alertRegisterTatoe = (): void => {
    if (!userId || !user) {
      return null;
    }
    if (title === '' || shortParaphrase === '' || description === '') {
      alert('入力されていない箇所があります。');
      return;
    }

    if (user.userName === '') {
      alert('ユーザー名を登録して投稿してください。');
      return;
    }
  };

  return { alertRegisterTatoe, noInputsData };
};
