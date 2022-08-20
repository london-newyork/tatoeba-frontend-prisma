import Link from 'next/link';
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { useRecoilState } from 'recoil';
import { useAuth } from '../hooks/useAuth';
import { useUserInfo } from '../hooks/useUserInfo';
import { LoginUserAtom } from '../utils/atoms/LoginUserAtom';
import { UserNameAtom } from '../utils/atoms/UserNameAtom';
import { ProfileImage } from './ProfileImage';

export const Profile = () => {
  const { userId } = useAuth();
  const user = useUserInfo(userId);

  const [userName, setUserName] = useState<string>('');
  const [persistAccessToken, setPersistAccessToken] =
    useRecoilState(LoginUserAtom);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const handleChangeUserName = (
    e: ChangeEvent<{ value: string }> | undefined
  ): void => {
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
      setUserName((prev): string => {
        return prev;
      });

      setIsFocus(false);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${persistAccessToken}`,
          },
          body: JSON.stringify({ userName }),
        }
      );
      await res.json();
    }
  };

  useEffect(() => {
    // `user` の値が null でない時、 `setUserName` に `user` の値を入れる
    if (user) {
      setUserName(user.userName);
    }
  }, [user]);

  if (!user) {
    // データ読みこ中やエラーが発生した場合。
    // * 実際は読み込み中とエラーを区別して扱う必要があります。
    return (
      <div>
        <p>loading...</p>
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
            gap-y-2
            sm:gap-y-0
            position
            relative
            '
        >
          <ProfileImage />
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
                defaultValue={user}
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
        gap-y-2
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
                pl-3
                sm:pl-0
                sm:w-[128px]
                text-sm
                text-gray-400'
            >
              メールアドレス
            </li>
            <li
              className='
                h-7
                flex
                flex-1
                sm:min-w-[14rem]
                sm:w-[20rem]
                w-[18rem]
                p-4
                m-2
                '
            ></li>
          </ul>
        </li>
        <li
          className='
            min-w-[16rem]
            w-full
            pl-3
            sm:pl-0
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
                sm:pl-4
                pl-2
                m-2
                text-gray-400
                tracking-widest
                '
            >
              ******
            </li>
          </ul>
          <Link href='/ResetPassword'>
            <button
              className='
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
    </div>
  );
};
