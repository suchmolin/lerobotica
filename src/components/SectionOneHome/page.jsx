import SliderHome from "../SliderHome/page";
const SectionOneHome = () => {
  return (
    <section className="w-full lg:w-10/12 font-sans flex flex-col justify-center items-center">
      <div className="w-full h-[515px] bg-[#ffd500] flex flex-col items-center lg:justify-center pt-28 lg:pt-0">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            LEGO® Education inspires learning you can build on
          </h1>
          <p className="mt-2 text-sm md:text-base">
            Learning solutions designed to empower students and teachers, build
            deeper understanding and engagement, and ignite a life-long love of
            learning.
          </p>
        </div>
      </div>
      <SliderHome />
      <div className="h-[200px]">_</div>
    </section>
  );
};

export default SectionOneHome;
