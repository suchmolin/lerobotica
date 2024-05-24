import React from "react";
import { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect/page";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 44);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#f5f5f5] px-24 w-full h-12 py-2 flex gap-6 font-[cerapro] z-50 ${isScrolled ? "fixed top-0" : ""}`}
      style={{
        background: "#f5f5f5",
        top: "60px",
        width: "100%",
      }}
    >
      <div className="z-40">
        <MultiSelect />
      </div>
      <div className="z-40">
        <MultiSelect />
      </div>
      <div className="z-40">
        <MultiSelect />
      </div>
    </div>
  );
};

export default Navbar;
