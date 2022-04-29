import { Header } from "../src/components/Header/Header"
import { TopMainLayouts } from "../src/components/Layouts/TopMainLayouts"
import { Top } from '../src/components/Top/Top'
import { Footer } from '../src/components/Footer/Footer'
import React from 'react'

export default function Home() {

  return (
    <div>
      <Header />
      <TopMainLayouts>
        <Top />
      </TopMainLayouts>
      <Footer />
    </div>
  )
}
