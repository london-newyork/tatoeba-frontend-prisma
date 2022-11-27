import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from 'react';

import { useAuth } from '../../../commons/components/auth/hooks/useAuth';
import { useUserInfo } from '../../../commons/components/auth/hooks/useUserInfo';
import { DisplayMailAddress } from './DisplayMailAddress';
import { Password } from './Password';
import { ProfileUserName } from './ProfileUserName';
import { ProfileImage } from './ProfileImage';

export const Profile = () => {
  const { userId } = useAuth();
  const [userName, setUserName] = useState<string | undefined>('');
  const { user, updateUser, isLoading, error, updateUserProfileImage } = useUserInfo(userId);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const handleChangeUserName = (e: ChangeEvent<{ value: string }> | undefined): void => {
    if (!e) {
      return;
    }
    setUserName(e.target.value);
  };

  const handleCompositionStart = () => {
    setIsTyping(true);
  };

  const handleCompositionEnd = () => {
    setIsTyping(false);
  };
  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const focusCSS = 'outline-dark_green focus:outline-offset-2 focus:outline focus:outline-4';
  const unFocusCSS = 'focus:outline-0 outline-0';

  const handleOnKeyDown = async (
    event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined
  ): Promise<any> => {
    // Promise型解決できないので一旦any
    // @ts-ignore shiftKeyの型が解決できないので一旦無視
    if (event.key === 'Enter' && !isTyping && !event.shiftKey) {
      setUserName((prev): string | undefined => {
        return prev;
      });

      setIsFocus(false);
      await updateUser({ userName });
    }
  };

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, [user]);

  const handleOnSubmit = (file: File) => {
    updateUserProfileImage(file);
  };

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>データの取得に失敗しました</p>
      </div>
    );
  }

  return (
    <div className="group">
      <div
        className="
        profile-main-contents-wrapper
        md:min-w-[400px]
        "
      >
        <div
          className="
          profile-main-contents
          "
        >
          <ProfileImage onSubmit={handleOnSubmit} userId={userId} />
          <ProfileUserName
            user={user}
            userName={userName}
            onChange={handleChangeUserName}
            onFocus={handleOnFocus}
            onKeyDown={handleOnKeyDown}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            isFocus={isFocus}
            focusCSS={focusCSS}
            unFocusCSS={unFocusCSS}
          />
        </div>
      </div>
      <ul
        className="
        profile-sub-contents-wrapper"
      >
        <DisplayMailAddress email={user?.email} />
        <Password />
      </ul>
    </div>
  );
};
