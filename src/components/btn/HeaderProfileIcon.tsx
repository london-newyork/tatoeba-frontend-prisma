import React from 'react';
import { useRecoilValue } from 'recoil';
import { ProfileImageAtom } from '../utils/atoms/ProfileImageAtom';
import { TriggerDropDownMenuBtn } from './TriggerDropDownMenuBtn';

type HeaderProfileIconProps = {
  userId: string;
  className: string;
  onClick: () => void;
};

export const HeaderProfileIcon = ({ userId, className, onClick }: HeaderProfileIconProps) => {
  const profileImage = useRecoilValue(ProfileImageAtom);

  return (
    <TriggerDropDownMenuBtn onClick={onClick} className={className}>
      {userId ? (
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
          alt="ユーザーの画像"
          className="profile-image bottom-[2px] right-0"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.9}
          stroke="currentColor"
          className="header-icon-btn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      )}
    </TriggerDropDownMenuBtn>
  );
};
