import { FaWhatsapp } from "react-icons/fa"
export default function FAQBox({ data, fondo, texto }) {
  return (
    <div
      className={`relative w-full py-7 sm:max-w-2xl rounded-t-2xl ${fondo || "bg-gray-100"} px-3 sm:px-0`}
    >
      <div className="mx-auto">
        <div className="mx-auto grid max-w-xl divide-y divide-neutral-200">
          {data?.map((item, index) => (
            <div key={item.pregunta} className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span
                    className={`text-xl font-[baloo-bold] ${texto || "text-black"}`}
                  >
                    {item.pregunta}
                  </span>
                  <span
                    className={`transition group-open:rotate-180 ${texto || ""}`}
                  >
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                {item.respuesta.map((res, i) => (
                  <p
                    key={res.res}
                    className={`group-open:animate-fadeIn mt-3 ${texto || "text-neutral-600"}`}
                  >
                    {res.tit && (
                      <span className="font-bold whitespace-nowrap">
                        {res.tit}
                      </span>
                    )}{" "}
                    {res.res}
                  </p>
                ))}
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
