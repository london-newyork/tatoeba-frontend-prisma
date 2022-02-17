import React from 'react'
import { atom } from 'recoil'

function getUniqedId(){
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
}

export const RegisterdContents = atom({
    key: 'formContents',
    default: {
        id: getUniqedId(),
        complicated_story: '',
        short_paraphrase: '',
        detail: '',
    }
})