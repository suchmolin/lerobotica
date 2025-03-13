import { FaWhatsapp } from "react-icons/fa6"
export default function WhatsappButton() {
  return (
    <a
      aria-label="Whatsapp"
      href="https://wa.me/584122030567"
      target="_blank"
      className="fixed bottom-4 right-4 p-2 rounded-full text-white bg-verdeLR text-2xl z-50 hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp />
    </a>
  )
}
