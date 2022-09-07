import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';

type ShortParaphraseProps = {
  query: ParsedUrlQuery;
  shortParaphrase: string | null;
  setShortParaphrase: React.Dispatch<
    React.SetStateAction<string | string[] | null>
  >;
};

export const RegisterTatoeShortParaphrase = (props: ShortParaphraseProps) => {
  const { shortParaphrase, setShortParaphrase, query } = props;

  useEffect(() => {
    if (query.tId) {
      setShortParaphrase(query.shortParaphrase);
    }
  }, [query.tId]);

  return (
    <div
      className='
        flex
        justify-between
        flex-col
        lg:flex-row
        '
    >
      <label
        className='
        headline-s'
      >
        短く例えると
        <br />
        <span className='caption-s'>50文字以内</span>
      </label>
      <input
        value={shortParaphrase}
        onChange={(e) => setShortParaphrase(e.target.value)}
        name='short_paraphrase'
        placeholder='土地'
        type='text'
        className='input-area'
      ></input>
    </div>
  );
};
