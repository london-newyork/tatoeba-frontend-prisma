import React from 'react';
import Link from 'next/link';
import { SVGIcons } from '../../../../../src/commons/components/SVGIcons';
export const Password = () => {
  return (
    <li
      className="
      min-w-[16rem]
      profile-pw-wrapper"
    >
      <ul
        className="
        profile-pw-label-wrapper"
      >
        <li
          className="
          sm:w-[128px]
          text-sm
          text-gray-400
          "
        >
          パスワード
        </li>
        <li
          className="
          profile-pw-text
        "
        >
          ******
          <Link href="/reset-password" className="pl-2 text-gray-400">
            <SVGIcons
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              strokeWidth={0.9}
              className="dashboard-icon"
              name="dashboard-password"
            />
          </Link>
        </li>
      </ul>
    </li>
  );
};
