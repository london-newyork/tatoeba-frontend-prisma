import React from 'react';

type HeadLineProps = {
  style: string;
  text: string;
};
export const HeadLine = ({ style, text }: HeadLineProps) => {
  return <h1 className={style}>{text}</h1>;
};
