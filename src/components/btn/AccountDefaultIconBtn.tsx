import React from 'react';

type AccountDefaultIconBtnProps = {
  onClick: () => void;
};

export const AccountDefaultIconBtn = (props: AccountDefaultIconBtnProps) => {
  const { onClick } = props;
  return (
    <div>
      <button
        className='
        position
        relative
        my-auto
        rounded-full
        transition-all
        h-7
        w-7
        flex
        justify-center
        items-center
        text-xs
        text-gray-500
        cursor-pointer
        '
        onClick={onClick}
      >
        <span
          className='
          material-symbols-outlined
          absolute
          top-[1px]
          text-2xl
          header-icon'
        >
          person
        </span>
      </button>
    </div>
  );
};
