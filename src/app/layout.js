import { OpenModalProvider } from "@/context/openModal.jsx"
import Footer from "../components/Footer/page.jsx"
import "./globals.css"
import NavLang from "@/components/NavLang/page.jsx"
import NavMenu from "@/components/NavMenu/page.jsx"
import ModalContacto from "@/components/ModalContacto/page.jsx"

export const metadata = {
  title: "Lerobotica",
  description: "Lerobotica",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-[baloo]">
        <link rel="shortcut icon" href="/Robot-Lerobotica-RGB.ico" />
        <OpenModalProvider>
          <NavLang />
          <NavMenu />
          {children}
          <ModalContacto />
          <Footer />
        </OpenModalProvider>
      </body>
    </html>
  )
}
