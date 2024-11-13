"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { data as setsData } from "@/data/sets"
import Image from "next/image"
import { useState } from "react"
import ModalSets from "../ModalSets/page"

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
      <div
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
      <div className="w-full flex justify-center bg-amarilloLR pb-20 px-7 mt-20">
        <div className="w-11/12 slider-container -mt-10">
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
                      <div className="flex flex-col items-center text-center justify-center pb-7">
                        <div className="w-[100px] aspect-square relative">
                          <Image
                            src={currentSet.img}
                            alt={currentSet.id}
                            objectFit="contain"
                            fill="layout"
                            priority
                          />
                        </div>
                        <h2 className="text-azulLR text-2xl sm:text-3xl font-[baloo-bold]">
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
