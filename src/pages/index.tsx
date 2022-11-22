import { Header } from '../features/header/components/Header';
import { TopMainLayouts } from '../layouts/TopMainLayouts';
import { Top } from '../features/top/Top';
import { Footer } from '../features/footer/components/Footer';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Header />
      <TopMainLayouts>
        <Top />
      </TopMainLayouts>
      <Footer />
    </div>
  );
}
