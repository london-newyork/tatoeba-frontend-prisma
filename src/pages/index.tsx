import { Header } from "../components/Header/Header";
import { TopMainLayouts } from "../components/Layouts/TopMainLayouts";
import { Top } from "../components/Top/Top";
import { Footer } from "../components/Footer/Footer";
import React from "react";

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
