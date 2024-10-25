import Link from "next/link"

const RequestMeetingButton = ({ size }) => {
  return (
    <Link
      href="#"
      className={`flex w-fit bg-azulLR text-${size} font-[baloo-bold] text-white  px-3 py-1 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer flex-nowrap`}
    >
      Contáctanos
    </Link>
  )
}

export default RequestMeetingButton
