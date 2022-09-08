import Image from 'next/image';
import React from 'react';

type SubmitAvatar = {
  onSubmit: () => void;
  onChange: () => void;
};

export const ProfileImage = ({ onSubmit, onChange }: SubmitAvatar) => {
  return (
    <div>
      <div
        className='
            h-[100px]
            w-[100px]
            '
      >
        <form onSubmit={onSubmit}>
          <input type='file' onChange={onChange} />
          <button type='submit'>
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
        </form>
      </div>
    </div>
  );
};
