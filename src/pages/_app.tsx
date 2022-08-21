import 'tailwindcss/tailwind.css';
import '../../sass/main.scss';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
