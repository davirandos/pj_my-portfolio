import React from "react";
import { useTranslation } from "react-i18next";
import OnlineButton from "../../ui/OnlineButton";
import WhatsappButton from "../../ui/WhatsappButton";
import TextoPulsante from "../../ui/TextoPulsante";
import TechUi from "../../ui/TechUi";

const Inicio = () => {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className=" lg:w-[64%] w-full min-h-screen text-white flex flex-col justify-center items-center relative overflow-hidden gap-10"
    >
      <div className="relative w-[90%] flex flex-col md:flex-column gap-5 justify-center items-center text-center">

        {/* Online Button */}
        <OnlineButton></OnlineButton>


        <div className="w-[90%] md:w-[50%]">
          <TextoPulsante></TextoPulsante>
          <p className="text-md text-gray-400 lg:text-3xl font-light">{t("Info.description")}</p>
        </div>
        
        {/* WhatsApp Button */}
        <WhatsappButton></WhatsappButton>

      </div>

      <TechUi></TechUi>

      <a href="#tech" className="absolute bottom-30 md:bottom-20">
        <span className="material-symbols-outlined nav-item animate-bounce cursor-pointer">
          keyboard_arrow_down
        </span>
      </a>
    </section>
  );
};

export default Inicio;
