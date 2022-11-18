import React from "react";

type SendAuthInfoBtnProps = {
  onClick: () => Promise<void>;
  text: string;
};

export const SendAuthInfoBtn = ({ onClick, text }: SendAuthInfoBtnProps) => {
  return (
    <button
      className="
            mt-4
            mb-4
            login-btn
            "
      onClick={onClick}
    >
      {text}
    </button>
  );
};
