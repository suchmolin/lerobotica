const WelcomeTeacherResources = () => {
  return (
    <div className="relative w-full md:w-11/12 mt-10 flex flex-col-reverse md:flex-row px-2 justify-center items-center">
      <div className="w-10/12 mt-5 md:mt-0 md:min-h-[400px] sm:6/12 md:w-5/12 flex flex-col gap-2 justify-center lg:justify-end">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl  font-bold">
          Welcome to our Teacher Resources
        </h1>
        <p className="text-sm">
          Explore our comprehensive teacher resources, delve into our 400+
          lessons, or connect with peers in our online community for support and
          inspiration.
        </p>
      </div>
      <div className="w-full sm:w-8/12 sm:6/12 md:w-5/12 flex items-center justify-center">
        <div className="w-full overflow-hidden ">
          <video
            autoPlay
            muted
            loop
            className="w-full scale-150"
            src="/vid/welcomeVid.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTeacherResources;
