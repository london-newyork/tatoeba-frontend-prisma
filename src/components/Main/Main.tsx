import React from 'react';

export const Main = () => {
  return (
    <main className="px-10 pt-16 bg-gray-100 h-screen">
        <h2 className="text-4xl leading-loose text-gray-700 tracking-wider">
            <span className="">わかりにくい話に、</span><br />
            <span className="">わかりやすい例えで</span><br />
            <span className="">楽コミュニケーション</span>
        </h2>
        <div className="pt-8 pb-10">
            <input className="w-[376px] px-3 border-gray-300 rounded h-10 placeholder-gray-400 focus:outline-none focus:shadow-outline focus:border-gray-100 text-gray-600" placeholder='サーバーを例えると...'/>
        </div>
        <div className="bg-white pt-5 px-5 pb-10 w-[376px] rounded">
            <h3 className="text-2xl text-gray-700 pb-5">困っているお仕事</h3>
            <ul className="leading-loose">
                <li>WEBデザイナー</li>
                <li>WEBエンジニア</li>
                <li>WEBマーケター</li>
            </ul>
        </div>
    </main>
  )
};
