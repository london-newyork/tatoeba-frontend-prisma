import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { User } from '../../../types/types';

type ProfileUserNameProps = {
  user: User;
  userName?: string;
  onChange: (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined) => void;
  onFocus: () => void;
  onKeyDown: (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined) => void;
  onCompositionStart: () => void;
  onCompositionEnd: () => void;
  isFocus: boolean;
  focusCSS: string;
  unFocusCSS: string;
};

export const ProfileUserName = ({
  user,
  userName,
  onChange,
  onFocus,
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
  isFocus,
  focusCSS,
  unFocusCSS
}: ProfileUserNameProps) => {
  return (
    <div
      className="
            flex
            flex-col
            pb-2
            border-b
            border-gray-200
            sm:ml-8
            "
    >
      <p
        className="
                text-2xl
                text-gray-700
                "
      >
        <input
          defaultValue={user as unknown as string | undefined}
          value={userName}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onCompositionStart={onCompositionStart}
          onCompositionEnd={onCompositionEnd}
          placeholder="Nola Stradford"
          className={`${isFocus ? focusCSS : unFocusCSS}
                rounded-md
                px-2
                max-w-[14rem]
                `}
        />
      </p>
    </div>
  );
};
