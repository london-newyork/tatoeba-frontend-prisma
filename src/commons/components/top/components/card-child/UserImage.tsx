import React from 'react';

type UserImagProps = {
  profileImage: number;
  userName: string;
  userId: string;
};
export const UserImage = ({ profileImage, userName, userId }: UserImagProps) => {
  return (
    <div>
      <ul
        className="
                    flex
                    items-center
                    gap-x-2
                    pb-2
                    "
      >
        {/* imgタグでないと動かないため */}
        {/* eslint-disable */}
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
          alt="ユーザーの画像"
          className="
                      h-6
                      w-6
                      rounded-full
                      object-cover"
        />
        <p
          className="
                    text-xs
                    text-gray-400
                    "
        >
          {userName}が投稿
        </p>
      </ul>
    </div>
  );
};
