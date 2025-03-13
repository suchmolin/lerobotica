import Image from "next/legacy/image";
const SliderHome = () => {
  return (
    <div className="overflow-hidden flex justify-center items-center gap-2 sm:gap-8">
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec1.png"
          width={335}
          height={252}
          alt="Main Image one"
          className="hover:scale-105 transition-all cursor-pointer duration-700 ease-in-out"
        />
      </div>
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec2.png"
          width={335}
          height={252}
          alt="Main Image two"
          className="hover:scale-105 transition-all cursor-pointer duration-700 ease-in-out"
        />
      </div>
      <div className="w-64 h-[335px] rounded-xl overflow-hidden">
        <Image
          src="/img/mainsec3.png"
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
