import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Principles from "./Principles";
import SectionHeader from "../../ui/SectionHeader";

const Infos = () => {
    const { t } = useTranslation();

	return (
        <section className="w-full min-h-screen h-auto md:w-[90%] lg:w-[55%] flex flex-col text-white text-left items-center justify-center" >
            <div className="lg:w-full flex items-center justify-center flex-col md:flex-row gap-6 p-5">
                <div className="lg:w-[70%] w-full header flex flex-col ">
                    <SectionHeader
                    label={t("infos.whoIAm")}
                    title={t("infos.myNameIs")}
                    highlight="Luccas Davi"/>

                    <p className="text-gray-200">{t("infos.firstParag")} </p>
                    <br/>
                    <p className="text-gray-200">{t("infos.secondParag")}</p>

                    <Link className="underline mt-2 cursor-pointer" to="/about">{t("infos.button-mais")}</Link>
                </div>
                
                <div className="md:w-[70%] w-[100%]"><img src="/public/images/download.gif" className="rounded-xl lg:h-78 w-full h-64" alt="" /></div>
            </div>

            <div className="w-full hidden md:block">
                <Principles/>
            </div>
        </section>
    )
};

export default Infos;
