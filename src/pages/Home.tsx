import Inicio from "../components/home-folder/landing/Inicio";
import ProjectSection from "../components/home-folder/project/ProjectSection";
import Contact from "../components/home-folder/contact/Contact";
import Tech from "../components/home-folder/tech-stack/Tech"

import { useEffect } from "react";
import { useLocation } from "react-router";
import SpotifyActivity from "../components/spotify/SpotifyActivity";

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
      <main id="home" className="w-full min-h-screen classe-livre flex-col">
        <div className="w-full min-h-screen classe-livre flex-col flex gap-10 lg:gap-0">
          
          {/* Background Image and Gradient Overlay */}
          <div className="relative w-full min-h-screen flex justify-center items-center">
            <img src="/public/images/a.jpg" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" />

            <div className=" absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-t from-black from-10% via-black/70 via-45% to-transparent to-100% z-0" />
            
            <Inicio />
          </div>

          <Tech />
          <ProjectSection />
          {/* <Contato/> */}
        </div>
      </main>
    </>
  );

}
