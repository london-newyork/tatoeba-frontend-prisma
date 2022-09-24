import React, { useEffect } from 'react';

export const RegisterImageForExplanationTatoe = () => {
  // GETのとき
  useEffect(() => {
    //
  }, []);

  // 登録・編集
  const handleEditImageForExplanationTatoe = async () => {
    //fetch
  };
  // 削除
  const handleDeleteImageForExplanationTatoe = async () => {
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
      <div className='bg-gray-100 aspect-video w-full lg:max-w-[650px] max-w-full'>
        <button
          className='bg-gray-300 w-10 h-10 text-xs'
          onClick={handleEditImageForExplanationTatoe}
        >
          編集
        </button>
        <button
          className='bg-gray-400 w-10 h-10 text-xs'
          onClick={handleDeleteImageForExplanationTatoe}
        >
          削除
        </button>
        <img src='' className='border-0' />
      </div>
    </div>
  );
};
