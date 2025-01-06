"use client"
import data from "/src/lessonInfo.json"
import lessons from "/src/lessons.json"
import "./page.css"
import BoxLessonInfo from "@/components/BoxLessonInfo/page"

const LessonInfo = ({ params }) => {
  const { lessonTitle } = params

  const page = data.find((lesson) => lesson.id === lessonTitle)
  const head = lessons.find((lesson) => lesson.id === lessonTitle)

  return (
    <>
      <div
        translate="no"
        className="w-full flex md:flex-row  flex-col-reverse justify-center  py-5"
      >
        <div className="w-full md:w-7/12  px-3 md:px-0 flex justify-between flex-col">
          <h4 className="text-[#309a44]">{head.subtitle}</h4>
          <h2 className="text-2xl md:text-6xl font-bold">{head.title}</h2>
          <p>{head.description}</p>
          <div className="flex gap-4">
            <p>{head.duration}</p>
            <p>{head.level}</p>
            <p>{head.grade}</p>
          </div>
        </div>
        <div className="w-full md:w-3/12 px-3 md:px-0">
          <img src={head.urlImg} alt={head.title} />
        </div>
      </div>
      <div className="w-full">
        <BoxLessonInfo data={page} />
      </div>
    </>
  )
}

export default LessonInfo
