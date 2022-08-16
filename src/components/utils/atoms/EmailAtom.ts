import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
export const EmailAtom = atom<string | null>({
  key: 'email',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
