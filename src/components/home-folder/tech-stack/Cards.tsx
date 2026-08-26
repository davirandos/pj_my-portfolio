import { techCategories } from "../../../data/tecnologias";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {techCategories.map(
          ({ title, description, icon: Icon, tags }) => (
            <article
              key={title}
              className="
                group
                min-h-[230px]
                rounded-2xl
                border border-white/10
                bg-zinc-950
                p-6
                transition-all
                duration-300
                hover:border-white/20
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-11 w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border border-white/10
                    bg-zinc-900
                    text-zinc-400
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {t(title)}
                </h3>
              </div>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-lg
                  text-sm
                  leading-6
                  text-left
                  text-zinc-500
                "
              >
                {t(description)}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      cursor-default
                      rounded-lg
                      border border-white/10
                      bg-zinc-900/60
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-zinc-300
                      transition-all
                      duration-200
                      hover:border-white/20
                      hover:bg-zinc-800
                      hover:text-white
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Cards;