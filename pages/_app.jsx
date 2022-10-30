import "../styles/globals.css"
import "@/assets/font/sligoil-micro/style.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import splitbee from "@splitbee/web"

const MyApp = ({ Component, pageProps }) => {
  splitbee.init({ disableCookie: true })

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
