import React from 'react';
import { Header } from '@Components/header/Header';
import { TopMainLayouts } from '@Layouts/TopMainLayouts';
import { Top } from '@Components/top/components/Top';
import { Footer } from '@Components/footer/Footer';

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
