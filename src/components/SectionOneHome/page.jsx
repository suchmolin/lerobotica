import SliderHome from "../SliderHome/page";
const SectionOneHome = () => {
  return (
    <section className="w-full lg:w-10/12 font-sans flex flex-col justify-center items-center">
      <div className="w-full h-[515px] bg-[#ffd500] flex flex-col items-center lg:justify-center pt-28 lg:pt-0">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold">
            Lerobotica{" "}
            <span className="text-2xl sm:text-3xl">
              inspira un aprendizaje sobre el que puedes construir
            </span>
          </h1>
          <p className="mt-2 text-xs sm:text-base">
            Soluciones de aprendizaje diseñadas para capacitar a estudiantes y
            profesores, generar una comprensión y un compromiso más profundos y
            encender un amor por el aprendizaje para toda la vida.
          </p>
        </div>
      </div>
      <SliderHome />
      <div className="h-[200px]">_</div>
    </section>
  );
};

export default SectionOneHome;
