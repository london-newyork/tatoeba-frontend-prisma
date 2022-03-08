import { Header } from "../src/components/Header/Header"
import { TopMain } from "../src/components/Layouts/TopMain"
import { Top } from '../src/components/Top/Top'
import { Footer } from '../src/components/Footer/Footer'
export default function Home() {
  return (
    <div>
      <Header />
      <TopMain>
        <Top />
      </TopMain>
      <Footer />
    </div>
  )
}
