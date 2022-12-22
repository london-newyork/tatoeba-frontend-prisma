import React from 'react';

type ExplanationTextsProps = {
  title: string;
  shortParaphrase: string;
};
export const ExplanationTexts = ({ title, shortParaphrase }: ExplanationTextsProps) => {
  return (
    <div>
      <h3
        className="
                text-left
                text-sm
                text-black
                "
      >
        {title}
        <span className="text-gray-500">を例えると...</span>
        <br />
        <span className="text-lg">{shortParaphrase}</span>
      </h3>
    </div>
  );
};
