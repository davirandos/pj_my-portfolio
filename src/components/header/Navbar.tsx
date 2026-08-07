import { useState } from "react";
import Language from "./Language.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Nav.home" },
  { href: "/about", label: "Nav.sobre" },
  { href: "/#projects", label: "Nav.projects" },
  { href: "/#contact", label: "Nav.contato" },
];

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 left-0 w-full h-16 z-10">

      {/* Navbar for Mobile*/}
      <div className="lg:hidden w-[95%] mx-auto px-4 h-full flex items-center rounded-2xl backdrop-blur-[3px] bg-zinc-900/20 border border-white/10
      ">
        <nav className="font-semibold w-full">
          
          <ul className="flex flex-row items-center text-white w-full justify-between">

            <li className="items-center flex">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </li>

            <li>
              <Language />
            </li>

          </ul>
        </nav>
      </div>

      {/* Menu da navbar mobile aberto */}
      {menuOpen && (
        <div className="lg:hidden w-[95%] mx-auto px-4 h-full flex items-center rounded-2xl backdrop-blur-[3px] bg-zinc-900/20 border border-white/10 mt-2">
          <nav className="w-full flex items-center justify-center">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} active:text-white duration-200 className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Navbar for Desktop*/}
      <div className="hidden lg:flex w-[64%] mx-auto px-4 h-full flex items-center rounded-2xl bg-zinc-900/20 top-4 backdrop-blur-[5px] border border-white/10">
        <nav className="w-full text-zinc-400 justify-between flex items-center">
        {/* Logo */}
        <Link to="#contact">@davirandos</Link>

          {/* Barra de navegação */}
          <ul className="flex flex-row gap-4">
            {navItems.map((item) => (
              <li key={item.href} className="hover:text-white hover:bg-zinc-700/20 py-1.5 px-3 rounded-full transition-colors">
                <a href={item.href} className="hover:text-zinc-300 transition-colors">
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <Language />
          </nav>
      </div>
      
    </header>
  );
}

export default Navbar;
