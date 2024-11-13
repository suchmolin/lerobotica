import Image from "next/image"
import FormContact from "../FormContact/page"

export default function ContactoEtapa({ data }) {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      <div className="flex justify-center items-center pt-20">
        <FormContact />
      </div>
      <div className="absolute top-0 -right-10">
        <div className="relative w-[130px] aspect-square">
          <Image
            src="/img/legoRojo3.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-0 -right-5">
        <div className="relative w-[130px] aspect-square">
          <Image
            src="/img/legoVerde.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <div className="relative w-[230px] aspect-square">
          <Image
            src="/img/legoAzulGrande2.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
    </div>
  )
}
