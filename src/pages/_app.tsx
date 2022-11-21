import 'tailwindcss/tailwind.css';
import '../../sass/main.css';
import '../../styles/globals.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Inter } from '@next/font/google';

const noto = Noto_Sans_JP({ subsets: ['japanese'], weight: ['300'] });
const zen = Zen_Kaku_Gothic_New({ subsets: ['japanese'], weight: ['300'] });
const inter = Inter({ subsets: ['latin'], weight: ['300'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <main className={zen.className}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}

export default MyApp;
