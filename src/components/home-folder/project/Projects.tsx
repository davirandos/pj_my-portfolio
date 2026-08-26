import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

import { useTranslation } from "react-i18next";

import SectionHeader from "../../ui/SectionHeader";

{/* Importa os dados dos projetos */}
import { projects } from "../../../data/projetos";

export default function Projects() {
  const { t } = useTranslation();

  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 3);

  return (
    <section className="w-[90%] min-h-screen flex items-center justify-center py-20">
      <div className="w-[90%] lg:w-[64%] mx-auto">

        {/* Header */}
        <SectionHeader
        label={t("Projects.subtitle")}
        title={t("Projects.title")}
        description={t("Projects.description")}/>

        {/* Projects */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="
                group
                flex flex-col
                rounded-2xl
                border border-white/10
                bg-zinc-900/50
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
              "
            >
              {/* Image */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.titleKey}
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-semibold text-white">
                  {t(project.titleKey)}
                </h3>

                <p className="text-sm text-gray-400 mt-3">
                  {t(project.descriptionKey)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-white/5
                        border border-white/10
                        text-gray-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      text-sm
                      px-4 py-2
                      rounded-lg
                      border border-white/10
                      text-white
                      hover:bg-white/10
                      transition
                    "
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex items-center gap-2
                        text-sm
                        px-4 py-2
                        rounded-lg
                        bg-white
                        text-black
                        hover:bg-gray-200
                        transition
                      "
                    >
                      <ExternalLink size={16} />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show more */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="
                px-6 py-3
                rounded-xl
                border border-white/10
                text-white
                hover:bg-white/10
                transition
              "
            >
              {showAllProjects
                ? "Mostrar menos"
                : "Ver mais projetos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}