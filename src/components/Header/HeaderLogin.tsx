import React from "react";
import Link from "next/link";
import { Auth } from "../hooks/useAuth";

export const HeaderLogin = ({ isLoggedIn }: Pick<Auth, "isLoggedIn">) => {
  return (
    <div className="py-2 text-sm text-gray-500 hover:bg-gray-100 hover:w-full">
      {isLoggedIn ? (
        <Link href="/dashboard">
          <a>ログイン</a>
        </Link>
      ) : (
        <Link href="/login">
          <a>ログイン</a>
        </Link>
      )}
    </div>
  );
};
