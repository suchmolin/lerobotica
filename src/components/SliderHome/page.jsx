import Image from "next/image";
const SliderHome = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2 sm:gap-8 -mt-48 lg:-mt-36 overflow-hidden px-3">
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec1.webp"
          width={335}
          height={252}
          alt="Main Image one"
        />
      </div>
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec2.webp"
          width={335}
          height={252}
          alt="Main Image two"
        />
      </div>
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec3.webp"
          width={335}
          height={252}
          alt="Main Image three"
        />
      </div>
    </div>
  );
};

export default SliderHome;
