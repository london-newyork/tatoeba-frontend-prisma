import React from "react";
import { Tatoe } from "../types/types";

export const DetailTatoeTitle = ({ title }: Pick<Tatoe, "title">) => {
  return (
    <div
      className="
      flex
      relative
      "
    >
      <h1
        className="
        text-4xl
        text-gray-700
        pt-6
        "
      >
        {title}
        をわかりやすく例えると...
      </h1>
    </div>
  );
};
