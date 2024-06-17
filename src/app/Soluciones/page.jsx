export default function Soluciones() {
  const data = [
    {
      title: "Coding Express",
      subtitle: "Pre-escolar (3-5 años)",
      description:
        "Coding express contiene 234 ladrillos LEGO® DUPLO® que incluyen el tren Push & Go con luces y sonidos, motor, sensor de colores que interactúa con 5 ladrillos de acción y 2 cambios de vía a su vez una Tarjeta con actividades para iniciar las actividades y 6 tarjetas de inspiración a doble cara.",
      image: "/img/codingExpress.png",
    },
    {
      title: "Spike Essential",
      subtitle: "Primaria alta (9-11 años)",
      description:
        "El SPIKE Essential Set contiene 449 elementos, incluido hardware inteligente y una colorida selección de ladrillos LEGO familiares, apilables y apropiados para la edad. El hardware incluye un concentrador de 2 puertos, 2 motores pequeños, una matriz de luz y un sensor de color.",
      image: "/img/spikeEssential.png",
    },
    {
      title: "BricQ Motion Essential",
      subtitle: "Primaria baja (6 a 8 años)",
      description:
        "El BricQ Motion Essential Set contiene 523 elementos de ladrillos LEGO, dos (2) manuales de construcción para los robots y un paquete de elementos de reemplazo, que contiene duplicados de las piezas que se pierden con mayor frecuencia.",
      image: "/img/bricQMotion.png",
    },
    {
      title: "BricQ Motion Prime",
      subtitle: "Primaria alta (9-11 años)",
      description:
        "El BricQ Motion Prime Set incluye 562 LEGO Technic ™ y elementos de ladrillo, dos (2) manuales de construcción para los robots y un paquete de elementos de reemplazo, que contiene duplicados de las piezas que se pierden con mayor frecuencia.",
      image: "/img/BricQMotionPrime.png",
    },
    {
      title: "Spike Prime",
      subtitle: "Primaria baja (6 a 8 años)",
      description:
        "El SPIKE Prime Set contiene 528 elementos, incluido hardware inteligente y una colorida selección de ladrillos LEGO familiares, apilables y apropiados para la edad. El hardware incluye un concentrador de 2 puertos, 3 motores y un HUB Materias: - Ingeniería - Informática - STEAM - Codificación - Ciencia",
      image: "/img/spikePrime.png",
    },
  ];
  return (
    <div className="firstSec w-full flex justify-center py-3 font-[cerapro]">
      <div className="w-11/12 flex flex-col items-center justify-center">
        <h2 className="text-[#b1127c] text-6xl font-bold py-7 ">Soluciones</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-11/12 md:w-5/12 flex flex-col lg:flex-row items-center bg-white border border-gray-200 rounded-lg shadow"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {item.title}
                </h5>
                <p className="mb-3 text-sm font-normal">{item.description}</p>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
