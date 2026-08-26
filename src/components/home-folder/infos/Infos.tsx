import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Principles from "./Principles";
import SectionHeader from "../../ui/SectionHeader";
import JavaShowcase from "../../java-showcase/JavaShowCase";
import OutlineLinkButton from "../../ui/OutlineLinkButton";

const Infos = () => {
    const { t } = useTranslation();

	return (
        <section className="w-full min-h-screen h-auto md:w-[100%] lg:w-[65%] flex flex-col text-white text-left items-center justify-center" >
            <div className="lg:w-full w-[95%] flex items-center justify-center flex-col md:flex-row gap-6 p-5">
                <div className="md:w-[80%] w-full header flex flex-col ">
                    <SectionHeader
                    label={t("infos.whoIAm")}
                    title={t("infos.myNameIs")}
                    highlight="Luccas Davi"/>

                    <p className="text-gray-200">{t("infos.firstParag")} </p>
                    <br/>
                    <p className="text-gray-200">{t("infos.secondParag")}</p>

                    <div className="flex flex-col mb-15 lg:mb-5 lg:flex-row w-full h-12 gap-2 mt-5">
                        <OutlineLinkButton children="Baixar Currículo" className="w-full lg:w-auto" href="/curriculo-luccas-davi.pdf"/>
                        <OutlineLinkButton children="Sobre mim" className="w-full lg:w-auto" href="/about" target="_self"/>
                    </div>
                    
                </div>
                
                <JavaShowcase/>
            </div>

            <div className="w-full hidden md:block">
                <Principles/>
            </div>
        </section>
    )
};

export default Infos;
