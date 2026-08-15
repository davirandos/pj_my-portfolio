import {
  Monitor,
  Server,
  Database,
  Box,
  type LucideIcon,
} from "lucide-react";

type TechCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

const techCategories: TechCategory[] = [
  {
    title: "Frontend & Mobile",
    description:
      "React, Next.js, TypeScript e Tailwind CSS. Foco em interfaces modernas, responsivas e performáticas.",
    icon: Monitor,
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend & APIs",
    description:
      "Java, Spring Boot e Node.js. Desenvolvimento de APIs REST e aplicações backend.",
    icon: Server,
    tags: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST API",
      "Python"
    ],
  },

  {
    title: "Banco de Dados",
    description:
      "Modelagem, consultas e gerenciamento de bancos de dados relacionais.",
    icon: Database,
    tags: [
      "MySQL",
      "PostgreSQL",
      "JPA",
      "Hibernate",
      "PrismaORM",
    ],
  },

  {
    title: "DevOps & Ferramentas",
    description:
      "Versionamento, containers, deploy e ferramentas utilizadas durante o desenvolvimento.",
    icon: Box,
    tags: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];

const Cards = () => {
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
                  {title}
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
                {description}
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