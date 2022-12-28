import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

// TODO: カプセル化
// LoginUserAtomとProfileImageAtomファイルを後でけす
const LoginUserAtom = atom<string | null>({
  key: 'accessToken',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

const ProfileImageAtom = atom({
  key: 'profileImage',
  default: new Date().getTime()
});

// features/auth 内で使っていい hooks

export const useProfileImage = () => {
  return useRecoilValue(ProfileImageAtom);
};

export const useSetProfileImage = () => {
  const setProfileImage = useSetRecoilState(ProfileImageAtom);

  // 最新時刻への更新しか許可しない
  return () => setProfileImage(new Date().getTime());
};

export const useAccessToken = () => {
  return useRecoilValue(LoginUserAtom);
};

export const useSetAccessToken = () => {
  return useSetRecoilState(LoginUserAtom);
};
