import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    icon: SiReact,
    color: "group-hover:text-cyan-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "group-hover:text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "group-hover:text-cyan-500",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "group-hover:text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "group-hover:text-blue-400",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "group-hover:text-blue-500",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "group-hover:text-orange-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "group-hover:text-white",
  },
];

const TechUi = () => {
  return (
    <>
      {/* MOBILE */}
      <div
        className="
          md:hidden
          w-full
          overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
      >
        <div className="flex w-max animate-tech-scroll">
          {[...technologies, ...technologies].map(
            ({ name, icon: Icon, color }, index) => (
              <div
                key={`${name}-${index}`}
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  px-4
                  py-2
                  cursor-pointer
                "
              >
                <Icon
                  className={`
                    text-3xl
                    text-zinc-500
                    transition-colors
                    duration-300
                    ${color}
                  `}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-wrap gap-4">
        {technologies.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="
              group
              flex
              items-center
              gap-2
              rounded-lg
              cursor-pointer
              px-4
              py-2
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Icon
              className={`
                text-2xl
                text-zinc-500
                transition-colors
                duration-300
                ${color}
              `}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechUi;