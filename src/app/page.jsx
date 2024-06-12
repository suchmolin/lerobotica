import PreguntasFrecuentes from "@/components/PreguntasFrecuentes/page";
import SectionOneHome from "@/components/SectionOneHome/page";
import SectionThreeHome from "@/components/SectionThreeHome/page";
import SectiontwoHome from "@/components/SectiontwoHome/page";
import TeacherOpinions from "@/components/TeacherOpinions/page";

export default function Home() {
  //coment
  return (
    <main className="flex flex-col items-center font-[cerapro]">
      <header className="w-full">
        {/*
        <NavLang />
        <NavMenu />
        */}
      </header>
      <SectionOneHome />
      <SectiontwoHome />
      <SectionThreeHome />
      <TeacherOpinions />
      <PreguntasFrecuentes />
    </main>
  );
}
