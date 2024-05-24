import React from "react";
import { useEffect, useState } from "react";
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
      className={`bg-[#f5f5f5] px-24 w-full h-12 py-2 flex font-[cerapro] z-50 gap-6 ${isScrolled ? "fixed top-0" : ""}`}
      style={{
        background: "#f5f5f5",
        top: "60px",
        width: "100%",
      }}
    >
      <select className="h-full text-sm" size="1" multiple>
        <option value="1">Filtrar por</option>
      </select>
      <select className="h-full text-sm" size="1" multiple>
        <option value="1">Filtrar por</option>
        <option value="1">Filtrar por</option>
        <option value="1">Filtrar por</option>
      </select>
    </div>
  );
};

export default Navbar;
