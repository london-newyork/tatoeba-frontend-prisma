import 'tailwindcss/tailwind.css';
import '../../sass/main.css';
import '../../styles/globals.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { Noto_Sans_JP } from '@next/font/google';

const noto = Noto_Sans_JP({ subsets: ['japanese'], weight: ['300'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <main className={noto.className}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}

export default MyApp;
