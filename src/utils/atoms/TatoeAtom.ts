import { Tatoe } from '@Types/types';
import { atom } from 'recoil';

export const TatoeAtom = atom<Tatoe[]>({
  key: 'tatoe',
  default: []
});
