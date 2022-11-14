import React from 'react';
import { useRecoilValue } from 'recoil';
import { ProfileImageAtom } from '../utils/atoms/ProfileImageAtom';

type AccountDefaultIconBtn = {
  userId: string;
  onClick: () => void;
};

export const AccountDefaultIconBtn = ({
  onClick,
  userId,
}: AccountDefaultIconBtn) => {
  const profileImage = useRecoilValue(ProfileImageAtom);

  return (
    <div>
      <button className='account-default-icon-btn-wrapper' onClick={onClick}>
        {userId ? (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
            alt='ユーザーの画像'
            className='profile-image bottom-[2px]'
          />
        ) : (
          <span
            className='
            material-symbols-outlined
            absolute
            top-[3px]
            text-3xl
            header-icon'
          >
            person
          </span>
        )}
      </button>
    </div>
  );
};
