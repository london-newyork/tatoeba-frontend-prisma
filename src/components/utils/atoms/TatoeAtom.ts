import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

// FIXME: 永続化がバグを生む可能性があるため一旦コメントアウト。あとで削除予定。
export const TatoeAtom = atom({
  key: 'tatoe',
  default: [],

  // effects_UNSTABLE: [persistAtom],
});
