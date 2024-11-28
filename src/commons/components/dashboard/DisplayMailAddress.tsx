import React from 'react';
import { User } from '@Types/types';

export const DisplayMailAddress = ({ email }: Pick<User, 'email'>) => {
  return (
    <div>
      <li>
        <ul
          className="
          profile-mail-address-wrapper
          "
        >
          <li
            className="
            pl-0
            text-sm
            text-gray-400
            sm:w-[128px]"
          >
            メールアドレス
          </li>
          <li
            className="
            my-2
            ml-0
            py-1
            pl-0
            sm:m-0
            sm:w-[128px]
            sm:p-0"
          >
            {email}
          </li>
        </ul>
      </li>
    </div>
  );
};
