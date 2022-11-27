import React from "react";

type HeadLineProps = {
  className: string;
  text: string;
};
export const HeadLine = ({ className, text }: HeadLineProps) => {
  return <h1 className={className}>{text}</h1>;
};
