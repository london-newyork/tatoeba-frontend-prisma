import React, { VFC } from "react";
import Image from "next/legacy/image";
import { SearchBox } from "./SearchBox";
export const TopUpperContents: VFC = () => {
  return (
    <section className="top-upper-wrapper">
      <div id="wrapper-left" className="order-2 sm:order-2 lg:order-1">
        <h2 className="top-catch-copy font-top_headline">
          わかりにくい話に、
          <br />
          わかりやすい例えで
          <br />
          楽コミュニケーション
        </h2>
        <h3 className="top-sub-catch-copy">
          ITの専門用語を知らない人に、
          <br className="md:hidden" />
          もっと伝わる「例え話」を
          <br />
        </h3>
        <SearchBox />
      </div>
      <div
        className="
                top-upper-image-wrapper
                w-[25%]
                lg:-ml-[96px]
                lg:max-w-[250px]
                lg:min-w-[240px]
                sm:min-w-[144px]
                "
      >
        <Image
          src="/images/illust1.png"
          alt="illust of Tatoeba app"
          width={472}
          height={640}
          objectFit="contain"
          quality={50}
          priority={true}
          className="pt-12"
        />
      </div>
    </section>
  );
};
