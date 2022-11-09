import { atom } from 'recoil';

// ユーザーごとのエンドポイントを生成して保持するために必要

export const ProfileImageAtom = atom({
  key: 'profileImage',
  default: new Date().getTime(),
});
