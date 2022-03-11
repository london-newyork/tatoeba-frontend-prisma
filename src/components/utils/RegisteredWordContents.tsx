import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const RegisteredWordContents = atom({
    key: 'routerQuery',
    default: [],

    effects_UNSTABLE: [persistAtom],
})