const BoxLessonInfo = (props) => {
  const data = props.data;
  return (
    <div className="w-full md:w-6/12 px-4 md:px-0 ml-0 md:ml-28 mt-2  py-2 font-[cerapro]">
      <div
        id="mainLesson"
        dangerouslySetInnerHTML={{ __html: data.html || "not found" }}
      />
    </div>
  );
};

export default BoxLessonInfo;
