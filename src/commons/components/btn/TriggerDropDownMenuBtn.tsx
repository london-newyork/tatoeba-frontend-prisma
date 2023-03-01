import React from 'react';
type TriggerDropDownMenuBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
};
export const TriggerDropDownMenuBtn = ({ onClick, children, className }: TriggerDropDownMenuBtnProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
