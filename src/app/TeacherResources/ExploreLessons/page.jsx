"use client";
import { useEffect, useState } from "react";
import LessonCard from "@/components/LessonCard/page";
import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";
import ButtonLessonsSection from "@/components/ButtonLessonsSection/page";
import FilterLessons from "@/components/FilterLessons/page";
import data from "/src/lessons.json";

export default function ExploreLessons(props) {
  const [showLessons, setShowLessons] = useState(data);
  const [count, setCount] = useState(12);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedEtapas, setSelectedEtapas] = useState([]);
  const [search, setSearch] = useState("");
  const [filter1, setFilter1] = useState([]);
  const [filter2, setFilter2] = useState([]);
  const [filter3, setFilter3] = useState([]);
  const [filter4, setFilter4] = useState([]);

  useEffect(() => {
    const products = [];
    const etapas = [];
    const edad = [];
    const lapso = [];

    data.forEach((lesson) => {
      if (!products.some((item) => item.name === lesson.subtitle)) {
        if (lesson.subtitle.split(",").length === 1) {
          if (
            selectedEtapas.length === 0 ||
            (selectedEtapas.length > 0 &&
              selectedEtapas.some((etapa) => etapa.name === lesson.grade))
          ) {
            products.push({ id: lesson.subtitle, name: lesson.subtitle });
          }
        }
      }
      if (!etapas.some((item) => item.name === lesson.grade)) {
        if (
          selectedProducts.length === 0 ||
          (selectedProducts.length > 0 &&
            selectedProducts.some((prod) => prod.name === lesson.subtitle))
        ) {
          etapas.push({ id: lesson.grade, name: lesson.grade });
        }
      }

      //nuevo hacer que los filtros aparezcan solo si el anterior fue selecionado (ejemplo si se selecciona preescolar, aparece 3 años - 4 años - 5 años) y cuando se seleccione la edad aparece el lapso al lado
      /*if (!etapas.some((item) => item.name === lesson.edad)) {
        if (
          selectedProducts.length === 0 ||
          (selectedProducts.length > 0 &&
            selectedProducts.some((prod) => prod.name === lesson.subtitle))
        ) {
          etapas.push({ id: lesson.grade, name: lesson.grade });
        }
      }
      if (!etapas.some((item) => item.name === lesson.grade)) {
        if (
          selectedProducts.length === 0 ||
          (selectedProducts.length > 0 &&
            selectedProducts.some((prod) => prod.name === lesson.subtitle))
        ) {
          etapas.push({ id: lesson.grade, name: lesson.grade });
        }
      }*/
    });
    setFilter1(products);
    setFilter2(etapas);
    setFilter3(edad);
    setFilter4(lapso);
  }, [selectedProducts, selectedEtapas]);

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
            return lesson;
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
            return lesson;
          }
        }
      }
    });
    setShowLessons(filterData);
    setCount(12);
  }, [selectedProducts, selectedEtapas, search]);

  return (
    <div className="font-[cerapro]">
      <NavLang />
      <NavMenu />
      <FilterLessons
        selectedEtapas={selectedEtapas}
        setSelectedEtapas={setSelectedEtapas}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        filter1={filter1}
        filter2={filter2}
        filter3={filter3}
        filter4={filter4}
        search={search}
        setSearch={setSearch}
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
