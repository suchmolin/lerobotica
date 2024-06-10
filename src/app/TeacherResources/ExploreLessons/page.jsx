"use client";
import { useEffect, useState } from "react";
import LessonCard from "@/components/LessonCard/page";
import ButtonLessonsSection from "@/components/ButtonLessonsSection/page";
import FilterLessons from "@/components/FilterLessons/page";
import data from "/src/lessons.json";

export default function ExploreLessons(props) {
  const [showLessons, setShowLessons] = useState(data);
  const [count, setCount] = useState(12);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedEtapas, setSelectedEtapas] = useState([]);
  const [selectedEdad, setSelectedEdad] = useState([]);
  const [selectedLapso, setSelectedLapso] = useState([]);
  const [search, setSearch] = useState("");
  const [edadDisabled, setEdadDisabled] = useState(true);
  const [lapsoDisabled, setLapsoDisabled] = useState(true);
  const [filter1, setFilter1] = useState([]);
  const [filter2, setFilter2] = useState([]);
  const [filter3, setFilter3] = useState([]);
  const [filter4, setFilter4] = useState([
    { id: "lapso 1", name: "Lapso 1" },
    { id: "lapso 2", name: "Lapso 2" },
    { id: "lapso 3", name: "Lapso 3" },
  ]);

  useEffect(() => {
    const products = [];
    const etapas = [];
    const edad = [];
    // seteando el filtro de productos
    data.forEach((lesson) => {
      if (!products.some((item) => item.name === lesson.subtitle)) {
        if (lesson.subtitle.split(",").length === 1) {
          if (
            selectedEtapas.length === 0 ||
            (selectedEtapas.length > 0 &&
              selectedEtapas.some((etapa) => etapa.name === lesson.grade))
          ) {
            products.push({
              id: lesson.subtitle,
              name: lesson.subtitle,
              count: 1,
            });
          }
        }
      } else {
        if (lesson.subtitle.split(",").length === 1) {
          if (
            selectedEtapas.length === 0 ||
            (selectedEtapas.length > 0 &&
              selectedEtapas.some((etapa) => etapa.name === lesson.grade))
          ) {
            products.find((item) => item.name === lesson.subtitle).count++;
          }
        }
      }
      //seteando filtro de etapas
      if (!etapas.some((item) => item.name === lesson.grade)) {
        if (
          selectedProducts.length === 0 ||
          (selectedProducts.length > 0 &&
            selectedProducts.some((prod) => prod.name === lesson.subtitle))
        ) {
          etapas.push({ id: lesson.grade, name: lesson.grade, count: 1 });
        }
      } else {
        if (
          selectedProducts.length === 0 ||
          (selectedProducts.length > 0 &&
            selectedProducts.some((prod) => prod.name === lesson.subtitle))
        ) {
          etapas.find((item) => item.name === lesson.grade).count++;
        }
      }
    });

    // Si existe, agregar los objetos correspondientes a `edad`

    if (selectedEtapas.find((etapa) => etapa.name === "Preescolar 3 - 5")) {
      edad.push({ id: "3", name: "3 años" });
      edad.push({ id: "4", name: "4 años" });
      edad.push({ id: "5", name: "5 años" });
    }
    if (selectedEtapas.find((etapa) => etapa.name === "Primaria Baja 6 - 8")) {
      edad.push({ id: "6", name: "6 años" });
      edad.push({ id: "7", name: "7 años" });
      edad.push({ id: "8", name: "8 años" });
    }
    if (selectedEtapas.find((etapa) => etapa.name === "Primaria Alta 9 - 11")) {
      edad.push({ id: "9", name: "9 años" });
      edad.push({ id: "10", name: "10 años" });
      edad.push({ id: "11", name: "11 años" });
    }

    if (selectedEtapas.length > 0) {
      setEdadDisabled(false);
    } else {
      setSelectedEdad([]);
      setEdadDisabled(true);
    }
    if (selectedEdad.length > 0) {
      setLapsoDisabled(false);
    } else {
      setSelectedLapso([]);
      setLapsoDisabled(true);
    }

    setFilter1(products);
    setFilter2(etapas);
    setFilter3(edad);
  }, [selectedProducts, selectedEtapas]);

  useEffect(() => {
    if (selectedEdad.length > 0) {
      setLapsoDisabled(false);
    } else {
      setSelectedLapso([]);
      setLapsoDisabled(true);
    }
  }, [selectedEdad]);

  useEffect(() => {
    const filterData = data.filter((lesson) => {
      if (selectedProducts.length === 0 && selectedEtapas.length === 0) {
        if (
          lesson.title.toLowerCase().includes(search.toLowerCase()) ||
          search === ""
        ) {
          return lesson;
        }
      }
      if (selectedProducts.length > 0 && selectedEtapas.length === 0) {
        if (
          selectedProducts.some((product) => product.name === lesson.subtitle)
        ) {
          if (
            lesson.title.toLowerCase().includes(search.toLowerCase()) ||
            search === ""
          ) {
            return lesson;
          }
        }
      }
      if (selectedEtapas.length > 0 && selectedProducts.length === 0) {
        if (selectedEtapas.some((etapa) => etapa.name === lesson.grade)) {
          if (
            lesson.title.toLowerCase().includes(search.toLowerCase()) ||
            search === ""
          ) {
            if (
              selectedEdad.length === 0 ||
              selectedEdad.some((item) => item.name === lesson.edad)
            ) {
              if (
                selectedLapso.length === 0 ||
                selectedLapso.some((item) => item.name === lesson.lapso)
              ) {
                return lesson;
              }
            }
          }
        }
      }
      if (selectedProducts.length > 0 && selectedEtapas.length > 0) {
        if (
          selectedProducts.some(
            (product) => product.name === lesson.subtitle
          ) &&
          selectedEtapas.some((etapa) => etapa.name === lesson.grade)
        ) {
          if (
            lesson.title.toLowerCase().includes(search.toLowerCase()) ||
            search === ""
          ) {
            if (
              selectedEdad.length === 0 ||
              selectedEdad.some((item) => item.name === lesson.edad)
            ) {
              if (
                selectedLapso.length === 0 ||
                selectedLapso.some((item) => item.name === lesson.lapso)
              ) {
                return lesson;
              }
            }
          }
        }
      }
    });
    setShowLessons(filterData);
    setCount(12);
  }, [selectedProducts, selectedEtapas, search, selectedEdad, selectedLapso]);

  return (
    <div className="firstSec font-[cerapro]">
      {/*
        <NavLang />
        <NavMenu />
        */}
      <FilterLessons
        selectedEtapas={selectedEtapas}
        setSelectedEtapas={setSelectedEtapas}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        selectedEdad={selectedEdad}
        setSelectedEdad={setSelectedEdad}
        selectedLapso={selectedLapso}
        setSelectedLapso={setSelectedLapso}
        filter1={filter1}
        filter2={filter2}
        filter3={filter3}
        filter4={filter4}
        search={search}
        setSearch={setSearch}
        lapsoDisabled={lapsoDisabled}
        edadDisabled={edadDisabled}
      />
      <div className="m-3 flex flex-row gap-3 sm:gap-8 flex-wrap justify-center items-center">
        <LessonCard count={count} data={showLessons} />
      </div>
      <ButtonLessonsSection
        count={count}
        setCount={setCount}
        dataLength={showLessons.length}
      />
    </div>
  );
}
