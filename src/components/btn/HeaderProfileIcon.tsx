import React from 'react';
import { useRecoilValue } from 'recoil';
import { ProfileImageAtom } from '../utils/atoms/ProfileImageAtom';
import { TriggerDropDownMenuBtn } from './TriggerDropDownMenuBtn';

type HeaderProfileIconProps = {
  userId: string;
  wrapperStyle: string;
  onClick: () => void;
};

export const HeaderProfileIcon = ({
  userId,
  wrapperStyle,
  onClick,
}: HeaderProfileIconProps) => {
  const profileImage = useRecoilValue(ProfileImageAtom);

  return (
    <TriggerDropDownMenuBtn onClick={onClick} style={wrapperStyle}>
      {userId ? (
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
          alt='ユーザーの画像'
          className='profile-image bottom-[2px] right-0'
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
    </TriggerDropDownMenuBtn>
  );
};
