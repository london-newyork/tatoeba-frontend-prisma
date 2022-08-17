import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
export const UserNameAtom = atom<string>({
  key: 'userName',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
