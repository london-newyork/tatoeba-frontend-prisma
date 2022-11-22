import React from 'react';
import Link from 'next/link';
import { SVGIcons } from '../../commons/components/SVGIcons';

export const TatoeListCountFollowerBtn = () => {
  const handleConfirmFollower = () => {
    // TODO WIP userInfoのうち、ユーザーのクリックされた例えリスト固有のfollower情報を取得して、配列へ押し込む
    // setFollower((prev:any)=>{
    // [{userInfo}, ...prev]
    // })
  };
  return (
    <ul>
      <li
        className="
              flex
              items-center"
      >
        <Link href="/follower/[id]" passHref={true} onClick={handleConfirmFollower}>
          <SVGIcons
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            strokeWidth={0.9}
            className="tatoe-list-icon"
            name="star"
          />
        </Link>
        {/* ここにuserIdとfollowerのuserIdが合った時の条件で式を作成する */}
        {/* <span
                  className='text-mid_green text-xs'
                  >{item.followedCount}</span> */}
      </li>
    </ul>
  );
};
