import React from 'react';

export const Main = () => {
  return (
    <main className="
        px-[100px]
        h-screen
        pt-16
        bg-gray-100">
        <h2 className="
            text-5xl
            text-gray-700
            leading-loose
            tracking-wider">
            わかりにくい話に、<br />
            わかりやすい例えで<br />
            楽コミュニケーション
        </h2>
        <div className="pt-8 pb-20">
            <div id="scss-wrapper-input">
                <input
                    className="
                    scss-border
                    "
                    placeholder='サーバーを例えると...' />
            </div>
            <button
                className="
                absolute
                left-[580px]
                translate-y-4
                text-gray-600
                hover:opacity-60
                hover:text-dark_green
               ">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
        <div
            className="
            w-[500px]
            pt-9
            px-9
            pb-10
            bg-white
            rounded">
            <h3 className="text-2xl text-gray-700 pb-5">困っているお仕事</h3>
            <ul className="leading-loose">
                <li><a className="hover:opacity-50">WEBデザイナー</a></li>
                <li><a className="hover:opacity-50">WEBエンジニア</a></li>
                <li><a className="hover:opacity-50">WEBマーケター</a></li>
            </ul>
        </div>
    </main>
  )
};
