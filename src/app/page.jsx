import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";
import Image from "next/image";

export default function Home() {
  //coment
  return (
    <main className="flex flex-col items-center font-[cerapro]">
      <header className="w-full">
        <NavLang />
        <NavMenu />
      </header>
      <section className="w-10/12 font-sans flex flex-col justify-center items-center">
        <div className="w-full h-[515px] bg-[#ffd500] flex flex-col items-center justify-center">
          <div className="w-8/12">
            <h1 className="text-6xl font-bold">
              LEGO® Education inspires learning you can build on
            </h1>
            <p>
              Learning solutions designed to empower students and teachers,
              build deeper understanding and engagement, and ignite a life-long
              love of learning.
            </p>
          </div>
        </div>
        <div className="flex gap-8 -mt-36">
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
        <div className="h-60">a</div>
      </section>
    </main>
  );
}
