import React from "react";
import { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect/page";
import SearcherLessons from "../SearcherLessons/page";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const FilterLessons = (props) => {
  const {
    selectedProducts,
    setSelectedProducts,
    selectedEtapas,
    setSelectedEtapas,
    selectedEdad,
    setSelectedEdad,
    selectedLapso,
    setSelectedLapso,
    filter1,
    filter2,
    filter3,
    filter4,
    search,
    setSearch,
    edadDisabled,
    lapsoDisabled,
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);
  const [filterOpen, setFilterOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 44);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#f5f5f5] lg:px-24 w-full min-h-12 px-3 py-1 flex flex-col lg:flex-row gap-6 font-[cerapro] justify-between z-50 ${isScrolled ? "fixed top-0" : ""}`}
      style={{
        background: "#f5f5f5",
        top: "60px",
        width: "100%",
      }}
    >
      {filterOpen && (
        <>
          <div className="flex flex-col lg:flex-row  gap-6 justify-start ">
            <div className="z-50">
              <MultiSelect
                data={filter1}
                placeHolder={"Productos"}
                state={selectedProducts}
                seter={setSelectedProducts}
                size={"mr-32"}
              />
            </div>
            <div className="z-40">
              <MultiSelect
                data={filter2}
                placeHolder={"Etapa"}
                state={selectedEtapas}
                seter={setSelectedEtapas}
                size={"mr-0"}
              />
            </div>
            <div className="z-30">
              {!edadDisabled && (
                <MultiSelect
                  data={filter3}
                  placeHolder={"Edad"}
                  state={selectedEdad}
                  seter={setSelectedEdad}
                  size={"mr-0"}
                />
              )}
            </div>
            <div className="z-20">
              {!lapsoDisabled && (
                <MultiSelect
                  data={filter4}
                  placeHolder={"Lapso"}
                  state={selectedLapso}
                  seter={setSelectedLapso}
                  size={"mr-0"}
                />
              )}
            </div>
          </div>
          <div className="">
            <SearcherLessons search={search} setSearch={setSearch} />
          </div>
        </>
      )}
      <button
        onClick={() => setFilterOpen(!filterOpen)}
        className="pl-10 py-2 flex items-center lg:hidden"
      >
        Filtro{" "}
        <span className="text-md">
          {filterOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </button>
    </div>
  );
};

export default FilterLessons;
