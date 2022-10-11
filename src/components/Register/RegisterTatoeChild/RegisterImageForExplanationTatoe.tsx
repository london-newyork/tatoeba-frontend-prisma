import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

export type SubmitImageProps = {
  query_tId?: string | string[];
  imageUrl?: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  defaultImageUrl?: string;
  setDefaultImageUrl: React.Dispatch<React.SetStateAction<string>>;
  deleteExplanationImage: MouseEventHandler<HTMLButtonElement>;
};

export const RegisterImageForExplanationTatoe = ({
  imageUrl,
  defaultImageUrl,
  setDefaultImageUrl,
  deleteExplanationImage,
}: SubmitImageProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFileSizeError, setIsFileSizeError] = useState<boolean>(false);

  // 登録・編集
  const handleClickChangeImage: MouseEventHandler<HTMLButtonElement> = (e) => {
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
    if (!file) {
      return;
    }
    if (file.size >= 1000000) {
      setIsFileSizeError(true);
      return;
    }

    if (defaultImageUrl) {
      URL.revokeObjectURL(defaultImageUrl);
    }
    setDefaultImageUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (defaultImageUrl) {
        URL.revokeObjectURL(defaultImageUrl);
      }
    };
  }, [defaultImageUrl]);

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
          ※登録できるのは画像ファイルの1MBまでです。
        </span>
        {isFileSizeError ? (
          <span className='error-message-s'>
            <br />
            <p>画像は1MBまで登録できます。</p>
          </span>
        ) : null}
      </label>
      <div className='explanation-img-wrapper position relative'>
        {defaultImageUrl ? (
          <img
            src={defaultImageUrl}
            className='explanation-img'
            alt='例えの説明画像'
          />
        ) : (
            <div className='absolute text-on-explanation-img'>画像を追加</div>
          ) && imageUrl ? (
          <img
            src={imageUrl}
            className='explanation-img'
            alt='例えの説明画像'
          />
        ) : (
          <div className='absolute text-on-explanation-img'>画像を追加</div>
        )}
        <div className='z-20 absolute top-1 right-2'>
          <div className='position relative'>
            <input
              type='file'
              accept='image/*'
              onChange={handleChangeFile}
              hidden
              name='image'
              ref={ref}
            />
            <button
              type='button'
              className='w-8 h-10 right-8 absolute'
              onClick={handleClickChangeImage}
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
          <button className='w-8 h-10' onClick={deleteExplanationImage}>
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
  );
};
