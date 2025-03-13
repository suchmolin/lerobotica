import Image from "next/legacy/image"

export default function CardBlog({ data, selected, setSelected }) {
  return (
    <button
      onClick={() => {
        setSelected(data.id)

        const element = document.getElementById("blogBox")
        const offset = screen.width > 768 ? -60 : -90 // Ajuste de 20px más arriba
        const elementPosition =
          element?.getBoundingClientRect().top + window.pageYOffset + offset

        window.scrollTo({ top: elementPosition, behavior: "smooth" })
      }}
      className={`group w-[300px] md:w-[240px] lg:w-[300px] p-4 rounded-t-2xl bg-gray-100 flex flex-col border-amarilloLR transition-all duration-300 ${selected === data.id ? "border-b-4 dropShadow3 scale-105" : ""} hover:scale-105`}
    >
      <h2 className="text-gray-600 lg:text-lg mb-4 h-12 text-start">
        {data.titulo}
      </h2>
      <div className="w-full aspect-square relative">
        <Image
          className={` transition-all duration-500`}
          src={data.img}
          objectFit="cover"
          layout="fill"
          alt={data.id}
        />
      </div>
    </button>
  )
}
