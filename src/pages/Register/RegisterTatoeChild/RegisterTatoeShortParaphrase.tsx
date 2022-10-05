import React, { useEffect } from 'react';

type ShortParaphraseProps = {
  query_tId?: string | string[];
  shortParaphrase: string | null;
  setShortParaphrase: React.Dispatch<
    React.SetStateAction<string | string[] | null>
  >;
};

export const RegisterTatoeShortParaphrase = (props: ShortParaphraseProps) => {
  const { shortParaphrase, setShortParaphrase, query_tId } = props;

  // useEffect(() => {
  //   if (query_tId) {
  //     setShortParaphrase(shortParaphrase); // props
  //   }
  // }, [query_tId]);

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
        name='shortParaphrase'
        placeholder='土地'
        type='text'
        className='input-area'
      ></input>
    </div>
  );
};
