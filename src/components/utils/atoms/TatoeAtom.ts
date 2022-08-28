import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const TatoeAtom = atom({
  key: 'tatoe',
  default: [],

  effects_UNSTABLE: [persistAtom],
});
