import React from "react";

import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";
import WelcomeTeacherResources from "@/components/WelcomeTeacherResources/page";
import TeacherResourcesCards from "@/components/TeacherResourcesCards/page";

const TeacherResources = () => {
  // Your component logic goes here

  return (
    <div className="font-[cerapro]">
      <NavLang />
      <NavMenu />
      <div className="w-full flex items-center justify-center">
        <WelcomeTeacherResources />
      </div>
      <div className="w-full flex items-center justify-center">
        <TeacherResourcesCards />
      </div>
    </div>
  );
};

export default TeacherResources;
