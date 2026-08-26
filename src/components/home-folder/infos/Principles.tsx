import { useTranslation } from "react-i18next";

const principles = [
  { key: "learning" },
  { key: "discipline" },
  { key: "organization" },
];

const Principles = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "principles",
  });

  return (
    <section className="py-5 h-46">
      <div className="h-full grid grid-cols-1 md:grid-cols-3">
        {principles.map((item, index) => (
          <div
            key={item.key}
            className={`
              py-4 md:px-8
              ${index !== 0 ? "md:border-l md:border-zinc-800" : ""}
            `}
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {t("label")}
              </p>

              <h3 className="text-xl font-bold text-white">
                {t(`${item.key}.title`)}
              </h3>

              <p className="text-base leading-relaxed text-zinc-400">
                {t(`${item.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;