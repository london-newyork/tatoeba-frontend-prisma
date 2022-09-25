import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SubmitImageProps } from '../../../components/types/types';

// TODO ProfileImageProps SubmitImageProps に置き換え
export const RegisterImageForExplanationTatoe = ({
  onSubmit,
  tId,
}: SubmitImageProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isImage, setIsImage] = useState<boolean>(false);
  const [isFileTypeError, setIsFileTypeError] = useState<boolean>(false);
  const [isFileSizeError, setIsFileSizeError] = useState<boolean>(false);
  // GETのとき
  useEffect(() => {
    //
  }, []);

  // 登録・編集
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
    e.target.value = '';

    if (file.size > 1000000) {
      setIsFileSizeError(true);
    }

    if (
      file.type !== 'image/gif' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/png' &&
      file.type !== 'image/svg+xml'
    ) {
      setIsFileTypeError(true);
    } else {
      setIsFileTypeError(false);
    }

    onSubmit(file);
    setIsImage(true);
  };

  // 削除
  const handleDeleteImage = async () => {
    //fetch
  };

  return (
    <div
      className='
      flex
      justify-between
      flex-col
      lg:flex-row'
    >
      <label
        className='
      headline-s
      '
      >
        説明画像
        <br />
        <span className='caption-s'>
          例えに必要な説明画像の登録<br></br>
          ※登録できるのはjpg・png形式の1MBまでです。
        </span>
        {isFileTypeError ? (
          <span className='text-xs text-red-600 leading-5'>
            <br />
            <p>画像はjpg、png、svg、gif形式のみアップロードできます。</p>
          </span>
        ) : null}
        {isFileSizeError ? (
          <span className='text-xs text-red-600 leading-5'>
            <br />
            <p>画像は1MBまで登録できます。</p>
          </span>
        ) : null}
      </label>
      <div className='w-full'>
        <div className='bg-gray-100 position relative flex justify-end'>
          {isImage ? (
            <img
              src={`${
                process.env.NEXT_PUBLIC_BACKEND_URL
              }/tatoe/${tId}?t=${''}`}
              className='border-0 z-10 rounded-md
            aspect-[4/3] object-cover w-full'
              alt='例えの説明画像'
            />
          ) : (
            <div className='absolute top-1/2 z-30 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-gray-400'>
              画像を追加
            </div>
          )}
          <div className='z-20 absolute top-1 right-2'>
            <div className='position relative'>
              <input type='file' onChange={handleChangeFile} hidden ref={ref} />
              <button
                type='button'
                className='w-8 h-10 right-8 absolute'
                onClick={handleClickImageButton}
              >
                <span
                  className='
              material-symbols-outlined
              text-xl
              submit-image-icon'
                >
                  edit_square
                </span>
              </button>
            </div>
            <button className='w-8 h-10' onClick={handleDeleteImage}>
              <span
                className='material-symbols-outlined text-2xl mt-[3px]
              submit-image-icon'
              >
                delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
