import { atom } from "recoil";

export const ProfileImageAtom = atom({
  key: "profileImage",
  default: new Date().getTime(),
});
