const ButtonLessonsSection = (porps) => {
  const { count, setCount, dataLength } = porps;

  return (
    <div className="w-full flex flex-col items-center justify-center my-5">
      <button
        onClick={() => setCount(count + 12)}
        className="border-2 border-[#006cb7] text-[#006cb7] hover:text-white bg-transparent hover:bg-[#006cb7] py-2 px-4 transition-all duration-300"
      >
        CARGAR MÁS
      </button>
      <p className="mt-2 font-light text-sm text-gray-500">
        Mostrando <span className="text-black">{count}</span> de{" "}
        <span className="text-black">{dataLength}</span>
      </p>
    </div>
  );
};

export default ButtonLessonsSection;
