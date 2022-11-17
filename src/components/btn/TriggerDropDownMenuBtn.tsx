import React from 'react';
type TriggerDropDownMenuBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
  style: string;
};
export const TriggerDropDownMenuBtn = ({
  onClick,
  children,
  style,
}: TriggerDropDownMenuBtnProps) => {
  return (
    <button type='button' className={style} onClick={onClick}>
      {children}
    </button>
  );
};
