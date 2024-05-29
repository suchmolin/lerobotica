"use client";
import data from "/src/lessonInfo.json";
import lessons from "/src/lessons.json";
import "./page.css";
import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";
import { useRouter } from "next/router";
import BoxLessonInfo from "@/components/BoxLessonInfo/page";

const LessonInfo = ({ params }) => {
  const { lessonTitle } = params;

  const page = data.find((lesson) => lesson.id === lessonTitle);
  const head = lessons.find((lesson) => lesson.id === lessonTitle);

  return (
    <>
      <NavLang />
      <NavMenu />
      <div className="w-full">
        <BoxLessonInfo data={page} />
      </div>
    </>
  );
};

export default LessonInfo;
