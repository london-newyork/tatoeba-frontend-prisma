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
    <button className={style} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
