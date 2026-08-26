import Inicio from "../components/home-folder/landing/Inicio";
import ProjectSection from "../components/home-folder/project/Projects";
import Contact from "../components/home-folder/contact/Contact";
import Tech from "../components/home-folder/tech-stack/Tech"

import { useEffect } from "react";
import { useLocation } from "react-router";
import Infos from ".././components/home-folder/infos/Infos";
import Projects from "../components/home-folder/project/Projects";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(location.hash) {
        const element = document.querySelector(location.hash);
        if(element){
          element.scrollIntoView({ behavior: "smooth"})
        }
      }
    }, 100)
    return () => clearTimeout(timeout)
  })

  return (
    <>
      <main id="home" className="relative w-full min-h-screen classe-livre flex-col" >

        {/* Grade de fundo */}
          <div className="absolute inset-0 pointer-events-none opacity-1" style={{backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 0px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 0px) `, backgroundSize: "36px 36px",}}/>

        <div className="w-full min-h-screen classe-livre flex-col flex gap-10 lg:gap-0">
          
          {/* Background Image and Gradient Overlay */}
          <div className="relative w-full min-h-screen flex justify-center items-center">
            <img src="/public/images/a.jpg" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" />

            <div className=" absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-t from-black from-10% via-black/70 via-45% to-transparent to-100% z-0" />
            
            <Inicio />
          </div>

          <Infos/>
          <Tech />
          <Projects />
          <Contact/>
        </div>
      </main>
    </>
  );

}
