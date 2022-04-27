import { NextRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { SetterOrUpdater } from "recoil"

export type Words = {
    id: string,
    title: string,
    shortParaphrase: string,
    description: string
}

export type Title = {
    id: Words["id"] | string[]
    title: string | string[] | ParsedUrlQuery[]| number | undefined
    setTitle:Dispatch<SetStateAction<string | string[] | ParsedUrlQuery[]>>
}

export type Edit= {
    handleMoveToEdit: (
      id: string,
      title: string,
      shortParaphrase: string,
      description: string) =>void
      words: Words[] | ParsedUrlQuery[]
      setWords: SetterOrUpdater<Words[] | ParsedUrlQuery[]>
      router: NextRouter
  }

  export type CardProps = {
    words: Edit["words"]
    handleMoveToEdit: Edit["handleMoveToEdit"]
    handleMoveToResult: Edit["handleMoveToEdit"]
}

export type Layouts = {
    children: ReactNode
}
