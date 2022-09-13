import Image from 'next/image';
import React, { useRef, MouseEventHandler, ChangeEventHandler } from 'react';

type SubmitImage = {
  onSubmit: (file: File) => void;
  // onChange: (file: File) => void;
};

export const ProfileImage = ({ onSubmit /*onChange*/ }: SubmitImage) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClickImageButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    onSubmit(file);
  };

  // TODO モーダルをかませる可能性あり モーダル使用時はformを使うこと
  return (
    <div>
      <div
        className='
            h-[100px]
            w-[100px]
            '
      >
        {/* <form onSubmit={onSubmit}> */}
        <input type='file' onChange={handleChangeFile} hidden ref={ref} />
        <button type='button' onClick={handleClickImageButton}>
          <Image
            src='/images/women3.jpg'
            alt='ユーザーの画像'
            width={200}
            height={200}
            className='
                  rounded-full
                  object-cover'
          />
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};
