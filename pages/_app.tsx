import "tailwindcss/tailwind.css";
import '../sass/main.scss'
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {

  return (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
  )
}

export default MyApp
