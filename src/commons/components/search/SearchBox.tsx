import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { SearchBoxLayouts } from '@Layouts/SearchBoxLayouts';

export const SearchBox = () => {
  const [keyWord, setKeyWord] = useState('');
  const router = useRouter();
  const handleChange = useCallback(
    (e) => {
      setKeyWord(e.target.value);
    },
    [keyWord]
  );

  const handleClickSearch = useCallback(() => {
    router.push({
      pathname: '/search-result/search-result-list/',
      query: {
        keyWord
      }
    });
  }, [keyWord]);

  return (
    <div>
      <SearchBoxLayouts>
        <input
          value={keyWord}
          onChange={handleChange}
          className="
                h-[44px]
                items-center
                border-dark_green
                bg-dark_green
                pl-8
                text-sm
                text-white
                caret-gray-800
                outline-none
                ring-0
                placeholder:text-darkGray_green
                focus:ring-0
                lg:w-[inherit]
                lg:max-w-[180px]
                "
          placeholder="サーバーを例えると..."
        />
        <button
          className="
                  absolute
                  -top-4
                  right-3
                  flex
                  h-[42px]
                  w-[42px]
                  translate-y-4
                  items-center
                  justify-center
                  rounded-r-full
                  bg-dark_green
                  text-sm
                  tracking-wide
                  text-gray-800
                  transition
                  duration-200
                  ease-in
                  "
          onClick={handleClickSearch}
        >
          <span
            className="
                    mr-3
                    h-8
                    w-[1px]
                    bg-gray-800"
          ></span>
          検索
        </button>
      </SearchBoxLayouts>
    </div>
  );
};
