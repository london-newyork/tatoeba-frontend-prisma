import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { useHandleLogout } from '../../hooks/handleLogout';

const { persistAtom } = recoilPersist();
const isLogout = useHandleLogout(); // ログアウトしているかを判断するhooks
// booleanでログイン・非ログインを分ける
// ログアウトしたら永続化をやめるようにする

export const LoginUserAtom = (): void => {
  if (!isLogout) {
    atom({
      key: 'persistAccessToken',
      default: [],

      effects_UNSTABLE: [persistAtom],
    });
  }

  atom({
    key: 'persistAccessToken',
    default: [],

    effects_UNSTABLE: [],
  });
};
