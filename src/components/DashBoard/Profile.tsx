import { UsersIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react';
import { useAuth } from '../hooks/useAuth';
import { ProfileImage } from './ProfileImage';

// type ProfileVal = {
//   userName: string | undefined;
//   //   email: string | undefined;
// };

export const Profile = () => {
  // バックエンドに対してアクセストークンを渡してユーザー一覧を要求
  // 汎用性を考えると関数名がこれでいいかはわからない。
  const { email } = useAuth();
  const updateUserName = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, email }),
    });
    await res.json();
  };

  // emailとuserNameをapiのデータから取り出して表示(passwordは表示しない)

  // 新規会員登録した際の情報を更新する
  const [userName, setUserName] = useState<string | null>();
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const handleChangeUserName = (
    e: ChangeEvent<{ value: string }> | undefined
  ): void => {
    setUserName(e.target.value);

    // 名前がない場合、投稿できないようにする => 必須
    // 現状、投稿時に投稿者名を入れていない仕様なので追加
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
  const unFocusCSS = 'focus:outline-0';

  // isTypingが動作中でなく漢字変換中でないときにエンターキーが押されたら名前を登録する
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
      // user一覧にemailとuserNameを送る
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email }),
      });
      await res.json();

      setIsFocus(false);
    }
  };

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
              //   value={currentEmail}
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
