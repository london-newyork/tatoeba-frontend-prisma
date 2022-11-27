import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const AllUserTatoeAtom = atom({
  key: 'allUserTatoe',
  default: [],

  effects_UNSTABLE: [persistAtom],
});
