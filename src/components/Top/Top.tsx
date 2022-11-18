import React, { VFC } from "react";

import { TopUpperContents } from "../Top/TopUpperContents";

import { CardLayouts } from "../Layouts/CardLayouts";
import { CardChild } from "./CardChild/CardChild";

export const Top: VFC = () => {
  return (
    <>
      <TopUpperContents />
      <CardLayouts>
        <CardChild />
      </CardLayouts>
    </>
  );
};
