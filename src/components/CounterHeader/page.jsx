export default function CounterHeader() {
  return (
    <div className="w-11/12 sm:w-fit bg-amarilloLR text-azulLR sm:px-16 flex flex-col sm:flex-row justify-between items-center py-4 rounded-t-2xl gap-6 xl:gap-10">
      <div className=" flex gap-6 xl:gap-10">
        <div className="flex flex-col text-center">
          <p className="text-5xl font-[baloo-bold]">42</p>
          <p className="text-xl leading-none font-bold">
            Años de <br /> experiencia
          </p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-5xl font-[baloo-bold]">66</p>
          <p className="text-xl leading-none font-bold">
            Paises <br /> alcanzados
          </p>
        </div>
      </div>
      <div className=" flex gap-6 xl:gap-10">
        <div className="flex flex-col text-center">
          <p className="text-5xl font-[baloo-bold]">65</p>
          <p className="text-xl leading-none font-bold">
            Millones de <br /> usuarios
          </p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-5xl font-[baloo-bold]">22</p>
          <p className="text-xl leading-none font-bold">
            Soluciones <br /> creadas
          </p>
        </div>
      </div>
    </div>
  )
}
