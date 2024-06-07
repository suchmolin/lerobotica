import { Inter } from "next/font/google";
import Footer from "../components/Footer/page.jsx";
import "./globals.css";
import NavLang from "@/components/NavLang/page.jsx";
import NavMenu from "@/components/NavMenu/page.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lerobotica",
  description: "Lerobotica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eS">
      <body className={inter.className}>
        <link rel="shortcut icon" href="/Robot-Lerobotica-RGB.ico" />
        {/*<NavLang />*/}
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
