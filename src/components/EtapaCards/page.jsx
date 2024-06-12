import Image from "next/image";
import Link from "next/link";
const EtapaCards = (props) => {
  const { imgUrl, icon, subtitulo, texto, redir } = props;
  return (
    <div className="w-3/12 flex-col shadow-xl gap-5 rounded-xl overflow-hidden">
      <Link href={redir}>
        <div className="w-full h-56">
          <Image
            width={300}
            height={200}
            src={`/img/${imgUrl}`}
            alt={imgUrl}
            className="w-full h-full hover:scale-105 transition-all cursor-pointer duration-700 ease-in-out"
          />
        </div>
        <div className="w-full p-4 flex gap-7 px-7 py-6">
          {icon}
          <div className="flex flex-col">
            <h4 className="font-bold text-xl">{subtitulo}</h4>
            <p className="">{texto}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EtapaCards;
