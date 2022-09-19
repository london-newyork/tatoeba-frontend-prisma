import Image from 'next/image';
import React, {
  useRef,
  MouseEventHandler,
  ChangeEventHandler,
  useState,
} from 'react';

type SubmitImage = {
  onSubmit: (file: File) => void;
  // onChange: (file: File) => void;
  avatarImagePath: string | undefined;
};

export const ProfileImage = ({
  onSubmit /*onChange*/,
  avatarImagePath,
}: SubmitImage) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isAvatar, setIsAvatar] = useState<boolean>(false);
  const handleClickImageButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!ref.current) {
      return;
    }
    ref.current.click();
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    onSubmit(file);
    setIsAvatar(true);
  };

  const handleOnLoadImage: ChangeEventHandler<HTMLImageElement> = (e) => {
    //　メモリの開放
    URL.revokeObjectURL(e.target.src);
  };
  // API側の画像は取得できていないがblobは生成されてここにも通っている
  console.log('ProfileImage **** avatarImagePath', avatarImagePath);

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
          {isAvatar ? (
            <Image
              src={avatarImagePath}
              onLoad={handleOnLoadImage}
              alt='ユーザーの画像'
              width={200}
              height={200}
              className='
                  rounded-full
                  object-cover'
            />
          ) : (
            <Image
              src='/images/women3.jpg'
              alt='ユーザーの画像'
              width={200}
              height={200}
              className='
                rounded-full
                object-cover'
            />
          )}
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};
