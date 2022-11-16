import React from 'react';

type DropDownMenuProps = {
  isClicked: boolean;
  isShow: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  style: string;
  children: React.ReactNode;
};

export const DropDownMenu = ({
  isClicked,
  isShow,
  onMouseEnter,
  onMouseLeave,
  style,
  children,
}: DropDownMenuProps) => {
  return (
    <>
      {(isClicked || isShow) && (
        <div
          className={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </div>
      )}
    </>
  );
};
