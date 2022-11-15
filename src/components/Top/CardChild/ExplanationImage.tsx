import React from 'react';

type ExplanationImage = {
  imageUrl: string;
};

export const ExplanationImage = ({ imageUrl }: ExplanationImage) => {
  return (
    <div>
      <ul
        className='
                        pt-5
                        '
      >
        <li
          className='
                            flex
                            flex-col
                            items-center
                            pt-6
                            '
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt='例えの説明画像'
              className='rounded-md max-h-[164px]'
            />
          ) : (
            <div className='rounded-md bg-gray-200 w-full min-h-[164px] flex items-center justify-center text-gray-400'>
              No Image
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
