import React, { VFC, useEffect } from 'react';

import { TopUpperContents } from '../Top/TopUpperContents'

import type { Words } from '../../components/types/types'
import { CardLayouts } from '../Layouts/CardLayouts';
import { CardChild } from './CardChild';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { WordsAtom } from '../utils/atoms/WordsAtom';
import { ParsedUrlQuery } from 'querystring';
import { useHandleMoveToResult } from '../hooks/handleMoveToResult';
import { useHandleMoveToEdit } from '../hooks/handleMoveToEdit';

export const Top:VFC = () => {
    const router = useRouter();
    const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(WordsAtom)

    const { handleMoveToResult } = useHandleMoveToResult({words, router})
    // const { handleMoveToEdit } = useHandleMoveToEdit({words, router})

    //以下をコメントアウトしたことでトップでの再レンダリングが起きなくなった。
    // useEffect(() => {
    // //router.queryをEditWordParentで状態管理させ、それをpropsでTopへ回すようリファクタする=>RegisterWordParentでは？
    //     router.isReady
    //     ? setWords((prev)=> [router.query, ...prev])
    //     : null
    // }, [router.query])

    return (
      <>
      <TopUpperContents />
      <CardLayouts>
          <CardChild
            words={words}
            // handleMoveToEdit={handleMoveToEdit}
            handleMoveToResult={handleMoveToResult}
          />
      </CardLayouts>
      </>
  )
};