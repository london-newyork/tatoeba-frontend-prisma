import React from 'react';

type ShortParaphraseProps = {
  shortParaphrase: string | null;
  setShortParaphrase: React.Dispatch<React.SetStateAction<string | string[] | null>>;
};

export const RegisterTatoeShortParaphrase = (props: ShortParaphraseProps) => {
  const { shortParaphrase, setShortParaphrase } = props;

  return (
    <div
      className="
        flex
        flex-col
        justify-between
        lg:flex-row
        "
    >
      <label
        className="
        headline-s"
        htmlFor="shortParaphrase"
      >
        短く例えると
        <br />
        <span className="caption-s">50文字以内</span>
      </label>
      <input
        value={shortParaphrase}
        onChange={(e) => setShortParaphrase(e.target.value)}
        name="shortParaphrase"
        placeholder="土地"
        type="text"
        className="input-area"
      ></input>
    </div>
  );
};
