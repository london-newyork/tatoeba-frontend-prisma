import React from 'react';
import { useRecoilValue } from 'recoil';
import { Tatoe } from '../../../components/types/types';
import { TatoeAtom } from '../../../components/utils/atoms/TatoeAtom';

type TitleProps = {
  tatoe?: Tatoe[];
  query_tId?: string;
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | string[] | null>>;
};

export const RegisterTatoeTitle = (props: TitleProps) => {
  const { title, setTitle, query_tId } = props;
  // const tatoe = useRecoilValue(TatoeAtom);
  // if (query_tId) {
  //   tatoe.map((item: Tatoe) => {
  //     if (item.tId === query_tId) {
  //       setTitle(item.title);
  //     }
  //   });
  // }

  return (
    <div
      className='
      flex
      justify-between
      flex-col
      lg:flex-row'
    >
      <label
        className='
      headline-s
      '
      >
        わかりにくい専門用語・文章
        <br />
        <span className='caption-s'>50文字以内</span>
      </label>
      <textarea
        value={title}
        name='title'
        onChange={(e) => setTitle(e.target.value)}
        rows={2}
        placeholder='サーバー'
        maxLength={50}
        className='input-area'
      ></textarea>
    </div>
  );
};
