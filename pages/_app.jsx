import "../styles/globals.css"
import "@/assets/font/sligoil-micro/style.css"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <Script src="https://cdn.splitbee.io/sb.js" />
    </>
  )
}

export default MyApp
