import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 p-1">
      <button
        onClick={() => i18n.changeLanguage("pt")}
        className={`
          rounded-full px-3 py-1 text-xs transition
          ${
            currentLanguage.startsWith("pt")
              ? "bg-white text-black"
              : "text-zinc-500 hover:text-white"
          }
        `}
      >
        PT
      </button>

      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`
          rounded-full px-3 py-1 text-xs transition
          ${
            currentLanguage.startsWith("en")
              ? "bg-white text-black"
              : "text-zinc-500 hover:text-white"
          }
        `}
      >
        EN
      </button>
    </div>
  );
}