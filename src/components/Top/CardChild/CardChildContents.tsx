import React from "react";
import { ExplanationImage } from "./ExplanationImage";
import { ExplanationTexts } from "./ExplanationTexts";
import { UserImage } from "./UserImage";

type CardChildContentsProps = {
  userName: string;
  profileImage: number;
  userId: string;
  title: string;
  shortParaphrase: string;
  imageUrl: string;
};

export const CardChildContents = ({
  userName,
  profileImage,
  userId,
  title,
  shortParaphrase,
  imageUrl,
}: CardChildContentsProps) => {
  return (
    <div>
      <ul
        className="
            h-[72px]
            pl-1
            "
      >
        <li>
          <UserImage
            userName={userName}
            profileImage={profileImage}
            userId={userId}
          />
          <ExplanationTexts title={title} shortParaphrase={shortParaphrase} />
        </li>
      </ul>
      <ExplanationImage imageUrl={imageUrl} />
    </div>
  );
};
