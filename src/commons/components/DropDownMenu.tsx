import React from 'react';

type DropDownMenuProps = {
  isClicked: boolean;
  isShow: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className: string;
  children: React.ReactNode;
};

export const DropDownMenu = ({
  isClicked,
  isShow,
  onMouseEnter,
  onMouseLeave,
  className,
  children
}: DropDownMenuProps) => {
  if (!isClicked && !isShow) {
    return null;
  }
  return (
    <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );

  // return (
  //   <>
  //     {(isClicked || isShow) && (
  //       <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  //         {children}
  //       </div>
  //     )}
  //   </>
  // );
};
