import React, { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { SVGIcons } from '../../SVGIcons';

export type SubmitImageProps = {
  imageUrl?: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  defaultImageUrl?: string;
  setDefaultImageUrl: React.Dispatch<React.SetStateAction<string>>;
  deleteExplanationImage?: MouseEventHandler<HTMLButtonElement>;
};

export const RegisterImageForExplanationTatoe = ({
  imageUrl,
  defaultImageUrl,
  setDefaultImageUrl,
  deleteExplanationImage
}: SubmitImageProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFileSizeError, setIsFileSizeError] = useState<boolean>(false);

  // TODO: 機能として切り出してfeaturesへ。UIの部分はsrc/componentsへ
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

  // TODO: JSX複雑になりすぎているのでリファクタ必要
  return (
    <div
      className="
      flex
      flex-col
      justify-between
      lg:flex-row"
    >
      <label
        className="
      headline-s
      "
      >
        説明画像
        <br />
        <span className="caption-s">
          例えに必要な説明画像の登録<br></br>
          ※登録できるのは画像ファイルの1MBまでです。
        </span>
        {isFileSizeError ? (
          <span className="error-message-s">
            <br />
            <p>画像は1MBまで登録できます。</p>
          </span>
        ) : null}
      </label>
      <div className="explanation-img-wrapper position relative">
        {defaultImageUrl ? (
          <img src={defaultImageUrl} className="explanation-img" alt="例えの説明画像" />
        ) : <div className="text-on-explanation-img absolute">画像を追加</div> && imageUrl ? (
          <img src={imageUrl} className="explanation-img" alt="例えの説明画像" />
        ) : (
          <div className="text-on-explanation-img absolute">画像を追加</div>
        )}
        <div className="z-10 mt-3 mr-3 flex justify-end gap-x-3">
          <input type="file" accept="image/*" onChange={handleChangeFile} hidden name="image" ref={ref} />
          <button type="button" onClick={handleClickChangeImage}>
            <SVGIcons
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              strokeWidth={0.9}
              className="explanation-img-icon"
              name="edit"
            />
          </button>
          <button onClick={deleteExplanationImage}>
            <SVGIcons
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              strokeWidth={0.9}
              className="explanation-img-icon"
              name="trash"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
