import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const WordsAtom = atom({
  key: 'words',
  default: [],

  effects_UNSTABLE: [persistAtom],
});
