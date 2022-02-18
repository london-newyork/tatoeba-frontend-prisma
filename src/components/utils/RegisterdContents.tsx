import React from 'react'
import { atom } from 'recoil'

// function getUniqedId(){
//     return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
// }

// const id = getUniqedId()
// const complicated_story = ''
// const short_paraphrase = ''
// const detail = ''

export const RegisterdContents = atom({
    key: 'formContents',
    default: [
        // id,
        // complicated_story,
        // short_paraphrase,
        // detail,
    ]
})