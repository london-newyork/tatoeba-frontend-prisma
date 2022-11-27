import React, { useRef, MouseEventHandler, ChangeEventHandler } from 'react';
import { useRecoilValue } from 'recoil';
import { ProfileImageAtom } from '../../../../utils/atoms/ProfileImageAtom';

type ProfileImageProps = {
  onSubmit: (file: File) => void;
  userId: string;
};

export const ProfileImage = ({ onSubmit, userId }: ProfileImageProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const profileImage = useRecoilValue(ProfileImageAtom);
  const handleClickImageButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!ref.current) {
      return;
    }
    ref.current.click();
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    onSubmit(file);
  };

  // TODO モーダルをかませる可能性あり モーダル使用時はformを使うこと
  return (
    <div>
      <div
        className="
            h-[100px]
            w-[100px]
            "
      >
        {/* <form onSubmit={onSubmit}> */}
        <input type="file" onChange={handleChangeFile} hidden ref={ref} />
        <button type="button" onClick={handleClickImageButton}>
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/profile_image?t=${profileImage}`}
            alt="ユーザーの画像"
            className="
            h-[100px]
            w-[100px]
            rounded-full
            bg-green-50
            object-cover"
          />
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};
