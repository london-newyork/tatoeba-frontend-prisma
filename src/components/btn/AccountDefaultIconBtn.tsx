import React from 'react';
import { useRecoilValue } from 'recoil';
import { OnClick } from '../types/types';
import { ProfileImageAtom } from '../utils/atoms/ProfileImageAtom';

type AccountDefaultIconBtn = {
  userId: string;
} & OnClick;

export const AccountDefaultIconBtn = ({
  onClick,
  userId,
}: AccountDefaultIconBtn) => {
  const profileImage = useRecoilValue(ProfileImageAtom);

  return (
    <div>
      <button
        className='
        position
        relative
        my-auto
        rounded-full
        transition-all
        h-7
        w-7
        flex
        justify-center
        items-center
        text-xs
        text-gray-500
        cursor-pointer
        '
        onClick={onClick}
      >
        {userId ? (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
            alt='ユーザーの画像'
            className='
          w-5
          h-5
          absolute
          bottom-[2px]
          rounded-full
          object-cover'
          />
        ) : (
          <span
            className='
            material-symbols-outlined
            absolute
            top-[1px]
            text-2xl
            header-icon'
          >
            person
          </span>
        )}
      </button>
    </div>
  );
};
