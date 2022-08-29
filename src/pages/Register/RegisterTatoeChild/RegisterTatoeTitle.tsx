import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';

type TitleProps = {
  query: ParsedUrlQuery;
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | string[] | null>>;
};

export const RegisterTatoeTitle = (props: TitleProps) => {
  const { title, setTitle, query } = props;

  useEffect(() => {
    if (query.tId) {
      setTitle(query.title);
    }
  }, [query.tId]);

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
            text-gray-500
            leading-tight
            w-[300px]
            pb-2
            md:pb-2
            lg:pb-0
            select-none
            '
      >
        わかりにくい専門用語・文章
        <br />
        <span className='text-xs text-gray-300'>50文字以内</span>
      </label>
      <textarea
        value={title}
        name='title'
        onChange={(e) => setTitle(e.target.value)}
        rows={2}
        placeholder='サーバー'
        maxLength={50}
        className='
            lg:max-w-[650px]
            max-w-full
            outline-none
            focus:ring-2
            focus:ring-green-400
            focus:border-green-400
            focus:placeholder-gray-300
            p-3
            block
            w-full
            text-sm
            md:text-sm
            text-gray-700
            border
            border-gray-300
            rounded-md
        '
      ></textarea>
    </div>
  );
};
