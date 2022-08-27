import { NextRouter, useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useRecoilState } from 'recoil';
import { Tatoe } from '../types/types';
import { WordsAtom } from '../utils/atoms/WordsAtom';

export const useHandleMoveToResult = () => {
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(WordsAtom);
  const router = useRouter();

  const handleMoveToResult = (props: Tatoe) => {
    const { tId, title, shortParaphrase, description } = props;

    tatoe.forEach((item: Tatoe) => {
      if (item.tId === tId) {
        router.push({
          pathname: '/SearchResult/[tId]/',
          query: {
            tId,
            title,
            shortParaphrase,
            description,
          },
        });
      }
      return item;
    });
  };
  return { handleMoveToResult };
};
