import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TextoPulsante = () => {
  const { t } = useTranslation();
  const text = "Dev Full-Stack";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // escrevendo
        if (displayedText.length < text.length) {
          setDisplayedText(
            text.slice(0, displayedText.length + 1)
          );
        } else {
          // terminou de escrever
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // apagando
        if (displayedText.length > 0) {
          setDisplayedText(
            text.slice(0, displayedText.length - 1)
          );
        } else {
          // terminou de apagar
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <>
      <h1 className="text-5xl lg:text-[90px] text-gray-300 font-italic">
        {displayedText}
        <span className="ml-1 animate-pulse text-white">
          |
        </span>
      </h1>
    </>
  );  
};

export default TextoPulsante;