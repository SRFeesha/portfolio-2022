import "../styles/globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { hotjar } from "react-hotjar"
import { useEffect } from "react"

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    hotjar.initialize(3171308, 6)
  }, [])

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
