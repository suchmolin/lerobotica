import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";
import SectionOneHome from "@/components/SectionOneHome/page";

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
    </main>
  );
}
