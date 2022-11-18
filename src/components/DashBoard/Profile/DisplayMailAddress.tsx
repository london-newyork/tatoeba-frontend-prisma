import React from "react";
import { User } from "../../types/types";

export const DisplayMailAddress = ({
  email,
}: Pick<User, "email"> | undefined) => {
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
                sm:w-[128px]
                text-sm
                text-gray-400"
          >
            メールアドレス
          </li>
          <li
            className="
                sm:w-[128px]
                py-1
                pl-0
                my-2
                ml-0
                sm:p-0
                sm:m-0
                "
          >
            {email}
          </li>
        </ul>
      </li>
    </div>
  );
};
