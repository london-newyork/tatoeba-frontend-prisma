import React from 'react';

type ExplanationImageProps = {
  imageUrl: string;
};

export const ExplanationImage = ({ imageUrl }: ExplanationImageProps) => {
  return (
    <div>
      <ul
        className="
                        pt-5
                        "
      >
        <li
          className="
                            flex
                            flex-col
                            items-center
                            pt-6
                            "
        >
          {imageUrl ? (
            // img タグでないと動かないため
            // eslint-disable-next-line
            <img src={imageUrl} alt="例えの説明画像" className="max-h-[164px] rounded-md" />
          ) : (
            <div className="flex min-h-[164px] w-full items-center justify-center rounded-md bg-gray-200 text-gray-400">
              No Image
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
