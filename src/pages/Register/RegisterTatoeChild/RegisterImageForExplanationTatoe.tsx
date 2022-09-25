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
        <span className='caption-s'>例えに必要な説明画像</span>
      </label>
      <div
        className='bg-gray-100 rounded-md
      aspect-video w-full lg:max-w-[650px] max-w-full'
      >
        <div className='flex justify-end'>
          <input type='file' onChange={handleChangeFile} hidden ref={ref} />
          <button
            type='button'
            className='w-10 h-10'
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
          <button className='w-10 h-10' onClick={handleDeleteImage}>
            <span
              className='material-symbols-outlined text-2xl mt-[3px]
              submit-image-icon'
            >
              delete
            </span>
          </button>
        </div>
        {isImage ? (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${tId}?t=${''}`}
            className='border-0'
          />
        ) : null}
      </div>
    </div>
  );
};
