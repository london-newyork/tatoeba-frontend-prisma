import { atom } from "recoil";

export const UserIdAtom = atom<string | null>({
  key: "userId",
  default: null,
});
