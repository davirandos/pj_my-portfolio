type SectionHeaderProps = {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
};

const SectionHeader = ({
  label,
  title,
  highlight,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <p className="text-sm text-gray-400 lg:text-lg uppercase">
        {label}
      </p>

      <h1 className="mb-3 text-2xl text-white font-bold lg:text-4xl">
        {title}

        <span>
            {highlight}
        </span>
      </h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default SectionHeader;