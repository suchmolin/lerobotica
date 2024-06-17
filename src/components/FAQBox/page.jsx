import { FaWhatsapp } from "react-icons/fa";
export default function FAQBox(props) {
  const { data } = props;
  return (
    <div className="relative w-full bg-white px-6 pt-3 pb-3 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto">
        <div className="mx-auto grid max-w-xl divide-y divide-neutral-200">
          {data.map((item, index) => (
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.title}</span>
                  <span className="transition group-open:rotate-180">
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
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600 flex items-center gap-2">
                  {item.content}
                  {item.whatsapp && (
                    <a
                      target="_blank"
                      className="text-[#128C7E]"
                      href={item.whatsapp}
                    >
                      <FaWhatsapp />
                    </a>
                  )}
                </p>
                {item.extracontent && (
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600  flex items-center gap-2">
                    {item.extracontent}
                    {item.whatsapp2 && (
                      <a
                        target="_blank"
                        className="text-[#128C7E]"
                        href={item.whatsapp2}
                      >
                        <FaWhatsapp />
                      </a>
                    )}
                  </p>
                )}
                {item.extracontent2 && (
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    {item.extracontent2}
                  </p>
                )}
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
