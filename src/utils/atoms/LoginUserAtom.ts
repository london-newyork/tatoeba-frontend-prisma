import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
export const LoginUserAtom = atom<string | null>({
  key: 'persistAccessToken',
  default: null,
  effects_UNSTABLE: [persistAtom]
});
