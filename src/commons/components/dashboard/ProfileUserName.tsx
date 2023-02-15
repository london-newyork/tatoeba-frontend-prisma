import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { User } from '@Types/types';

type ProfileUserNameProps = {
  user: User;
  userName?: string;
  // onChange: (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined) => void;
  onChange: (event: ChangeEvent<{ value: string }> | undefined) => void;
  onFocus: () => void;
  onKeyDown: (
    event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined
  ) => Promise<any>;
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
            border-b
            border-gray-200
            pb-2
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
                max-w-[14rem]
                rounded-md
                px-2
                `}
        />
      </p>
    </div>
  );
};
