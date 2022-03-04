import { atom } from 'jotai'

export const wordsAtom = atom({
    id: '',
    title:'例えトップ',
    short_paraphrase: '',
    description: '',
})

export const titleAtom = atom('')
// export const writableWordsAtom = atom(
//     (get) => get(wordsAtom),
//     (get, set, update) => {
//         set(wordsAtom, get(wordsAtom))
//     }
// )