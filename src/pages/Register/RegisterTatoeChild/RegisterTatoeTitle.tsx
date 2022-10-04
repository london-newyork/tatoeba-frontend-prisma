import React from 'react';
import { Tatoe } from '../../../components/types/types';

type TitleProps = {
  tatoe?: Tatoe[];
  apiTitle?: string;
  // tatoe?: Tatoe[];
  query_tId?: string;
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | string[] | null>>;
};

export const RegisterTatoeTitle = (props: TitleProps) => {
  const { title, setTitle /*  query_tId, apiTitle, tatoe  */ } = props;
  // const [apiTitle, setApiTitle] = useState('');

  // if (query_tId) {
  // tatoe.map((item: Tatoe) => {
  //   if (item.tId === query_tId) {
  //     setTitle(item.title);
  //   }
  // });
  // }

  console.log('@RTT title', title);

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
