import { OpenModalProvider } from "@/context/openModal.jsx"
import Footer from "../components/Footer/page.jsx"
import "./globals.css"
import NavLang from "@/components/NavLang/page.jsx"
import NavMenu from "@/components/NavMenu/page.jsx"
import ModalContacto from "@/components/ModalContacto/page.jsx"
import WhatsappButton from "@/components/WhatsappButton/page.jsx"

export const metadata = {
  title: "LeRobotica",
  description: "LeRobotica",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-[baloo]">
        <OpenModalProvider>
          <NavLang />
          <NavMenu />
          {children}
          <ModalContacto />
          <WhatsappButton />
          <Footer />
        </OpenModalProvider>
      </body>
    </html>
  )
}
