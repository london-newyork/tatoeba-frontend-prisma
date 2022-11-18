import React from "react";

type PostedUserProps = {
  profileImage: number;
  userId: string;
  userName: string;
};

export const PostedUser = ({
  profileImage,
  userId,
  userName,
}: PostedUserProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
        alt="ユーザーの画像"
        className="
        w-6
        h-6
        rounded-full
        object-cover"
      />
      <small className="text-gray-400">{userName}が投稿</small>
    </div>
  );
};
