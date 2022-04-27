import { NextRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { Dispatch, SetStateAction } from "react"
import { SetterOrUpdater } from "recoil"

export type Words = {
    id: string,
    title: string,
    shortParaphrase: string,
    description: string
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