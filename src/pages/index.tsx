import { Header } from '../commons/components/header/Header';
import { TopMainLayouts } from '../layouts/TopMainLayouts';
import { Top } from '../commons/components/top/components/Top';
import { Footer } from '../commons/components/footer/Footer';
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
