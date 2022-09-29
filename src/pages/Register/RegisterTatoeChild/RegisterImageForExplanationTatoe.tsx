import { ParsedUrlQuery } from 'querystring';
import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSetRecoilState } from 'recoil';
import { useApi } from '../../../components/hooks/useApi';
import { ExplanationImageAtom } from '../../../components/utils/atoms/ExplanationImageAtom';

export type SubmitImageProps = {
  // onSubmit: (file: File) => void;
  userId?: string;
  query_tId?: string | string[];
  query?: ParsedUrlQuery;
  persistAccessToken?: string;
};

export const RegisterImageForExplanationTatoe = ({
  query,
  query_tId,
  // onSubmit,
  persistAccessToken,
}: SubmitImageProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFileSizeError, setIsFileSizeError] = useState<boolean>(false);
  const explanationImage = useSetRecoilState(ExplanationImageAtom);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const tId = query.tId;

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

    // TODO キャンセル時の実装をしないとエラーになる
    if (file.size >= 1000000) {
      setIsFileSizeError(true);
      return;
    }

    // onSubmit(file);

    // 既存のimageがあったらそれを解放
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl(URL.createObjectURL(file));
  };

  // TODO 更新のときはあらかじめ画像が表示されている必要がある
  // GET してくる
  const { api: getTatoeApi } = useApi(
    `/tatoe/${query_tId}/explanation_image?e=${explanationImage}`,
    {
      method: 'GET',
    }
  );

  useEffect(() => {
    // Reactがこのコンポーネントを破棄するときにimageUrl解放
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    const main = async () => {
      if (query_tId) {
        setImageUrl(imageUrl);
        const blobUrl = await getTatoeApi();
        if (blobUrl) {
          setImageUrl(blobUrl);
        }
      }
    };
    main();
  }, [query_tId]);

  // TODO あとで名前を修正する可能性がある
  const deleteImage: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    // プレビュー画面の処理
    if (!imageUrl) {
      return;
    }
    URL.revokeObjectURL(imageUrl);
    setImageUrl(null);

    // storageに対する処理
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tatoe/${query_tId}/explanation_image`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${persistAccessToken}`,
        },
      }
    );
  };

  console.log('Image URL: ', imageUrl);

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
        {imageUrl ? (
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
          <button className='w-8 h-10' onClick={deleteImage}>
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
