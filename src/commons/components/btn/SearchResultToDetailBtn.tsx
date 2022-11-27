import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

type SearchResultToDetailBtnProps = {
  userId?: string;
  tId?: string;
  title?: string;
  shortParaphrase?: string;
  description?: string;
  children: ReactNode;
};

export const SearchResultToDetailBtn = ({
  userId,
  tId,
  title,
  shortParaphrase,
  description,
  children,
}: SearchResultToDetailBtnProps) => {
  const router = useRouter();
  const handleMoveToDetail = () => {
    router.push({
      pathname: `/search-result/${tId}`,
      query: {
        userId,
        tId,
        title,
        shortParaphrase,
        description,
      },
    });
  };
  return (
    <div>
      <button onClick={handleMoveToDetail}>{children}</button>
    </div>
  );
};
