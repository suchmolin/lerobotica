"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { data as setsData } from "@/data/sets"
import Image from "next/legacy/image"
import { useEffect, useState } from "react"
import ModalSets from "../ModalSets/page"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function SetsEtapa({ data }) {
  const [setSelected, setSetSelected] = useState("")
  const [openModalSet, setOpenModalSet] = useState(false)

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div>
        <div
          onClick={() => setSetSelected(data.sets[i])}
          key={`button${i}`}
          style={{
            width: "25px",
            color: "white",
            backgroundImage: "url('/img/legoazul2d.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2px",
          }}
        >
          {i + 1}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const handleSelectedSet = (set) => {
    setSetSelected(set)
    setOpenModalSet(true)
  }

  return (
    <>
      <div className="w-full relative flex justify-center bg-amarilloLR pb-20 px-7 mt-20">
        <div className="w-11/12 slider-container -mt-20">
          <Slider {...settings}>
            {data.sets.map((set) => {
              const currentSet = setsData.find((setData) => setData.id === set)

              return (
                <div key={currentSet.id}>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleSelectedSet(currentSet)}
                      className="w-fit"
                    >
                      <div className="flex flex-col items-center text-center justify-center pb-7 pt-10">
                        <div className="w-[100px] aspect-square relative">
                          <Image
                            src={currentSet.img}
                            alt={currentSet.id}
                            objectFit="contain"
                            fill="layout"
                            priority
                          />
                        </div>
                        <h2
                          className={` text-xl sm:text-2xl font-[baloo-bold] ${setSelected === set || setSelected.id === set ? "text-violetaLR" : "text-azulLR"} transition-all duration-300`}
                        >
                          {currentSet.name}
                        </h2>
                      </div>
                    </button>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
        <RobotsEscondidos
          idRobot={`setsrobot${data.id}`}
          mirror={true}
          size="sm"
          position={"bottom-0 left-0"}
        />
      </div>
      {openModalSet && (
        <ModalSets
          set={setSelected}
          openModalSet={openModalSet}
          setOpenModalSet={setOpenModalSet}
        />
      )}
    </>
  )
}
