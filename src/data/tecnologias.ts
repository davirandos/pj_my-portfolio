import {
  Monitor,
  Server,
  Database,
  Box,
  type LucideIcon,
} from "lucide-react";

export type TechCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Tech.items.front",
    description: "Tech.items.frontDesc",
    icon: Monitor,
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    title: "Tech.items.back",
    description: "Tech.items.backDesc",
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
    title: "Tech.items.bd",
    description: "Tech.items.bdDesc",
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
    title: "Tech.items.dev",
    description: "Tech.items.devDesc",
    icon: Box,
    tags: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];