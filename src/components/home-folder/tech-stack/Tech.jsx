import { useTranslation } from "react-i18next";
import Stat from "./Stats";
import Cards from "./Cards";
import SectionHeader from "../../ui/SectionHeader";

function Tech() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="tech"
        className="relative min-h-screen w-[90%] md:w-[90%] lg:w-[60%] flex-col gap-5 classe-livre overflow-hidden"
      >
        <div className="info w-[90%] relative z-5 h-auto text-center classe-livre flex-col">
          <SectionHeader
          label={t("Tech.subtitle")}
          title={t("Tech.title")}
          description={t("Tech.description")}/>

          <div className="flex w-full justify-start gap-10 mt-10 w-[50%] mb-10">
            <Stat end={6} suffix="+ " label={t("Tech.stats-proj")} />
            <Stat end={1} suffix="+" label={t("Tech.stats-year")} />
          </div>

          <Cards />

        </div>
      </section>
    </>
  );
}

export default Tech;
