import React, { VFC, useEffect } from 'react';

import { TopUpperContents } from '../Top/TopUpperContents'

import type { Edit, Result, Words } from '../../components/types/types'
import { CardLayouts } from '../Layouts/CardLayouts';
import { CardChild } from './CardChild';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { RegisteredWordContents } from '../utils/RegisteredWordContents';
import { ParsedUrlQuery } from 'querystring';
import { useHandleMoveToResult } from '../hooks/handleMoveToResult';
import { useHandleMoveToEdit } from '../hooks/handleMoveToEdit';

export const Top:VFC = () => {
    // const { handleMoveToEdit, handleMoveToResult } = props
    const router = useRouter();
    const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(RegisteredWordContents)

    // type PickedEdit = Pick<Edit,"handleMoveToEdit">
    // type PickedResult = Pick<Result, "handleMoveToResult">

    const { handleMoveToResult } = useHandleMoveToResult(words, router)
    const { handleMoveToEdit } = useHandleMoveToEdit(words, router)

    useEffect(() => {
    //router.queryをEditWordParentで状態管理させ、それをpropsでTopへ回すようリファクタする
        router.isReady
        ? setWords((prev)=> [router.query, ...prev])
        : null
    }, [])

    return (
      <>
      <TopUpperContents />
      <CardLayouts>
          <CardChild
            words={words}
            handleMoveToEdit={handleMoveToEdit}
            handleMoveToResult={handleMoveToResult}
          />
      </CardLayouts>
      </>
  )
};