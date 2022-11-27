import React from "react";

type DescriptionProps = {
  description: string | null;
  setDescription: React.Dispatch<
    React.SetStateAction<string | string[] | null>
  >;
};

export const RegisterTatoeDescription = (props: DescriptionProps) => {
  const { description, setDescription } = props;

  return (
    <div
      className="
        flex
        justify-between
        flex-col
        lg:flex-row"
    >
      <label
        className="
        headline-s
        "
      >
        詳しい説明
        <br />
        <span className="caption-s">400文字以内</span>
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        placeholder="WEBサイトを「家」とすると、サーバーは「土地」に例えられます。"
        maxLength={400}
        rows={8}
        className="input-area"
      ></textarea>
    </div>
  );
};
