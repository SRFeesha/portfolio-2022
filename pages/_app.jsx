import "../styles/globals.css"
import "@/assets/font/sligoil-micro/style.css"
// import { Navigation } from "@/components/navigation"
import { MenuDock } from "@/components/menu-dock"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Navigation /> */}
      <MenuDock />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  )
}

export default MyApp
