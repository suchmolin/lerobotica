import Image from "next/image";
const SliderHome = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2 sm:gap-8 -mt-36 lg:-mt-36 overflow-hidden px-3">
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec1.webp"
          width={335}
          height={252}
          alt="Main Image one"
          className="hover:scale-105 transition-all cursor-pointer duration-700 ease-in-out"
        />
      </div>
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec2.webp"
          width={335}
          height={252}
          alt="Main Image two"
          className="hover:scale-105 transition-all cursor-pointer duration-700 ease-in-out"
        />
      </div>
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec3.webp"
          width={335}
          height={252}
          alt="Main Image three"
          className="hover:scale-105 transition-all cursor-pointer duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SliderHome;
