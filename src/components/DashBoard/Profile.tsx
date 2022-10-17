import Link from 'next/link';
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import { useAuth } from '../hooks/useAuth';
import { useUserInfo } from '../hooks/useUserInfo';
import { ProfileImage } from './ProfileImage';

export const Profile = () => {
  const { userId } = useAuth();
  const [userName, setUserName] = useState<string | undefined>('');
  const { user, updateUser, isLoading, error, updateUserProfileImage } =
    useUserInfo(userId);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const handleChangeUserName = (
    e: ChangeEvent<{ value: string }> | undefined
  ): void => {
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

  const focusCSS =
    'outline-dark_green focus:outline-offset-2 focus:outline focus:outline-4';
  const unFocusCSS = 'focus:outline-0 outline-0';

  const handleOnKeyDown = async (
    event:
      | DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >
      | undefined
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
    <div className='group'>
      <div
        className='
        flex
        flex-row
        items-center
        md:min-w-[400px]
        sm:justify-between
        justify-center
        '
      >
        <div
          className='
            flex
            items-center
            flex-col
            sm:flex-row
            sm:justify-between
            justify-center
            gap-y-4
            sm:gap-y-0
            position
            relative
            '
        >
          <ProfileImage onSubmit={handleOnSubmit} userId={userId} />
          <div
            className='
            flex
            flex-col
            pb-2
            border-b
            border-gray-200
            sm:ml-8
            '
          >
            <h1
              className='
                text-2xl
                text-gray-700
                '
            >
              <input
                defaultValue={user as unknown as string | undefined}
                value={userName}
                onChange={handleChangeUserName}
                onFocus={handleOnFocus}
                onKeyDown={handleOnKeyDown}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
                placeholder='Nola Stradford'
                className={`${isFocus ? focusCSS : unFocusCSS}
                rounded-md
                px-2
                max-w-[14rem]
                `}
              ></input>
            </h1>
          </div>
        </div>
      </div>
      <ul
        className='
        text-gray-600
        mt-6
        flex
        flex-col
        gap-y-4
        text-sm'
      >
        <li>
          <ul
            className='
            flex
            items-start
            sm:items-center
            flex-col
            sm:flex-row
            justify-start
            '
          >
            <li
              className='
                pl-0
                sm:w-[128px]
                text-sm
                text-gray-400'
            >
              メールアドレス
            </li>
            <li
              className='
                sm:w-[128px]
                py-1
                pl-0
                my-2
                ml-0
                sm:p-0
                sm:m-0
                '
            >
              {user?.email}
            </li>
          </ul>
        </li>
        <li
          className='
            min-w-[16rem]
            w-full
            pl-0
            flex
            flex-col
            sm:flex-row
            justify-between'
        >
          <ul
            className='
            flex
            items-start
            sm:items-center
            flex-col
            sm:flex-row
            justify-start'
          >
            <li
              className='
                sm:w-[128px]
                text-sm
                text-gray-400
                '
            >
              パスワード
            </li>
            <li
              className='
              py-1
              pl-0
              my-2
              ml-0
              sm:p-0
              sm:m-0
              text-gray-400
              tracking-widest
              '
            >
              ******
              <Link href='/ResetPassword'>
                <button
                  className='
                  pl-2
                text-gray-400
                '
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                    />
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
