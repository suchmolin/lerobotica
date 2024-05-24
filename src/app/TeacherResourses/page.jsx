"use client";
import { useState } from "react";
import LessonCard from "@/components/LessonCard/page";
import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";
import ButtonLessonsSection from "@/components/ButtonLessonsSection/page";
import FilterLessons from "@/components/FilterLessons/page";
import data from "/src/lessons.json";

export default function TeacherResourses(props) {
  const [count, setCount] = useState(12);

  return (
    <div className="font-[cerapro]">
      <NavLang />
      <NavMenu />
      <FilterLessons />
      <div className="m-3 flex flex-row gap-3 sm:gap-8 flex-wrap justify-center items-center">
        <LessonCard count={count} data={data} />
      </div>
      <ButtonLessonsSection
        count={count}
        setCount={setCount}
        dataLength={data.length}
      />
    </div>
  );
}
