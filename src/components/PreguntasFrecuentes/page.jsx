import FAQBox from "../FAQBox/page";

export default function PreguntasFrecuentes() {
  return (
    <div className="w-full flex flex-col items-center mt-6 mb-10 font-[cerapro]">
      <div className="w-10/12 mt-10 flex justify-center">
        <div className="w-3/12 h-[330px] overflow-hidden rounded-full mt-16">
          <video
            className="h-[590px] -mt-16"
            autoPlay
            muted
            loop
            src="/img/helicopter.mp4"
          ></video>
        </div>
        <div className="w-7/12 flex flex-col items-center">
          <h2 className="text-4xl font-bold">Preguntas Frecuentes</h2>
          <FAQBox />
        </div>
      </div>
    </div>
  );
}
