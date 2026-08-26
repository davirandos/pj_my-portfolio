import { ArrowUpRight } from "lucide-react";

interface OutlineLinkButtonProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  className?: string;
}

const OutlineLinkButton = ({
  href,
  children,
  target = "_blank",
  className = "",
}: OutlineLinkButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`
        group
        inline-flex
        min-w-[220px]
        items-center
        justify-center
        gap-6
        rounded-full
        border
        border-white/15
        bg-white/[0.02]
        px-6
        py-3
        text-sm
        text-zinc-500
        backdrop-blur-sm
        transition-all
        duration-300

        hover:border-white/30
        hover:bg-white/[0.05]
        hover:text-zinc-200

        ${className}
      `}
    >
      <ArrowUpRight
        size={16}
        strokeWidth={1.5}
        className="
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />

      <span>{children}</span>
    </a>
  );
};

export default OutlineLinkButton;