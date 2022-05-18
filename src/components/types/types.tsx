import { NextRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { SetterOrUpdater } from "recoil"

export type Words = {
    tId: string,
    title: string,
    shortParaphrase?: string,
    description?: string,
    creationTime?: string,
    tImageUrl?: string
}

export type Title = {
    tId: Words["tId"] | string[]
    title: string
    setTitle:Dispatch<SetStateAction<string>>
}

export type Edit= {
    handleMoveToEdit: (
      tId: string,
      title: string,
      shortParaphrase: string,
      description: string) =>void
      creationTime: string,
      words: Words[]
      setWords: SetterOrUpdater<Words[]>
      router: NextRouter
  }

  export type Result= {
    handleMoveToResult: (
      tId: string,
      title: string,
      shortParaphrase: string,
      description: string) =>void
      creationTime: string,
      words: Words[] | ParsedUrlQuery[]
      setWords: SetterOrUpdater<Words[] | ParsedUrlQuery[]>
      router: NextRouter
  }


  export type CardProps = {
    words: Edit["words"]
    // handleMoveToEdit: Edit["handleMoveToEdit"]
    handleMoveToResult: Edit["handleMoveToEdit"]
}

export type Layouts = {
    children: ReactNode
}
