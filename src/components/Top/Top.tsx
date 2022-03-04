
import React, { VFC } from 'react';
import { useRouter } from 'next/router';
import { TopUpperContents } from '../Top/TopUpperContents'

export const Top:VFC = () => {
const router = useRouter();

const formQuery = [router.query]

/////////////////////////////////////////////////

// => firebaseにデータを入れてしまうので、Recoilも状態管理も関係ない。

// setFormItems(() => [ ...formItems, {
            // id : getUniqueId(),
            // title: registeredTitle,
            // ...
// }

/////////////////////////////////////////////////

  return (
      <>
      <TopUpperContents />
        <section className='dark'>
            <div
            id="tatoeba-card"
            className='
            bg-gray-200
            dark:bg-black
            px-6
            sm:px-6
            md:px-11
            lg:px-24
            pt-10
            sm:pt-8
            md:pt-10
            lg:pt-13'>
                <ul
                className='
                flex
                justify-center
                flex-wrap
                gap-x-6
                gap-y-8
                mt-4'>
                {formQuery
                ? formQuery.map((query) => (
                    <li
                    key={query.id}
                    className='
                    px-6
                    py-10
                    h-[300px]
                    w-[280px]
                    rounded-md
                    drop-shadow-2xl
                    bg-white
                    scss-card-toast
                    '
                    >
                        <h3 className='
                        text-lg
                        text-center'>{query.title}を例えると...{query.short_paraphrase} </h3>
                        <ul className='
                        pt-9
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                            <li>{query.detail}</li>
                        </ul>
                    </li>
                )
            ): undefined }
            </ul>
            </div>
        </section>
      </>
  )
};