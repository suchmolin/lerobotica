const BoxLessonInfo = (props) => {
  const data = props.data

  return (
    <div
      className={`w-full flex md:flex-row flex-col px-4 md:px-0 ml-0 md:pl-28 mt-2  py-2  `}
    >
      <div
        className="w-full"
        id="mainLesson"
        dangerouslySetInnerHTML={
          data ? { __html: data.html } : { __html: "not found" }
        }
      />
      {data && data.teacher ? (
        <div className="w-full flex justify-center">
          <div
            className="md:w-8/12 w-full h-fit"
            id="teacher"
            dangerouslySetInnerHTML={
              data ? { __html: data.teacher } : { __html: "not found" }
            }
          />
        </div>
      ) : null}
    </div>
  )
}

export default BoxLessonInfo
