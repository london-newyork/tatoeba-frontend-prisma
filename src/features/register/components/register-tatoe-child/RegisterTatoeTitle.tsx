import React from 'react';

type TitleProps = {
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | string[] | null>>;
};

export const RegisterTatoeTitle = (props: TitleProps) => {
  const { title, setTitle } = props;

  return (
    <div
      className="
      flex
      flex-col
      justify-between
      lg:flex-row"
    >
      <label
        className="
      headline-s
      "
      >
        わかりにくい専門用語・文章
        <br />
        <span className="caption-s">50文字以内</span>
      </label>
      <textarea
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        rows={2}
        placeholder="サーバー"
        maxLength={50}
        className="input-area"
      ></textarea>
    </div>
  );
};
