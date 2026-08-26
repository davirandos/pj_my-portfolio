export type Project = {
    id: number;
    titleKey: string;
    descriptionKey: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    websiteUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    titleKey: "Projects.items.fluxa.title",
    descriptionKey: "Projects.items.fluxa.description",
    image: "/public/images/projeto1.jpg",
    technologies: ["React", "Typescript", "Java", "SpringBoot", "MySQL"],
    githubUrl: "https://github.com/davirandos/fluxa-finance",
  },
  {
    id: 2,
    titleKey: "Projects.items.bookboxd.title",
    descriptionKey: "Projects.items.bookboxd.description",
    image: "/public/images/bookboxd.png",
    technologies: ["React", "TypeScript", "OpenLibrary API", "TailwindCSS"],
    githubUrl: "https://github.com/davirandos/pj_bookboxd",
    websiteUrl: "https://bookboxd-liart.vercel.app/",
  },
  {
    id: 3,
    titleKey: "Projects.items.portfolio.title",
    descriptionKey: "Projects.items.portfolio.description",
    image: "/public/images/portifolio.jpg",
    technologies: ["React", "TypeScript", "TailwindCSS", "i18next"],
    githubUrl: "https://github.com/seuusuario/projeto3",
    websiteUrl: "https://projeto3.vercel.app",
  }
];