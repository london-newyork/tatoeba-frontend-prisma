import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const SearchResultAtom = atom({
  key: 'result',
  default: [],

  // effects_UNSTABLE: [persistAtom],
});
