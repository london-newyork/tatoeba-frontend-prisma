import React from 'react'
import { atom } from 'recoil'

export const RegisteredWordContents = atom({
    key: 'formContents',
    default: []
})