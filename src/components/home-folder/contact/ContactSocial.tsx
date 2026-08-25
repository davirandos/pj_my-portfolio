import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSocial = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const { t } = useTranslation();

  const handleCopyEmail = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar o email", err);
      });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/davirandos/",
      color: "#0A66C2",
      badge: "💼",
      description: t("Modal.linkedin"),
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/davirandos",
      color: "#7e22ce",
      badge: "🐙",
      description: t("Modal.github"),
    },
    {
      name: "E-mail",
      icon: Mail,
      url: "",
      color: "#FB542B",
      badge: "📧",
      description: t("Modal.email"),
    },
  ];

  return (
    <section className="w-full flex h-full flex-col mt-5">
      <div className="w-full flex flex-col">
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            const commonClasses =
              "border border-white/10 blur-bg text-gray-300 rounded-lg classe-livre flex-row p-3 w-full gap-2 transition-all duration-200 cursor-pointer hover:bg-gray-800 hover:border-gray-600 hover:text-white hover:transform hover:scale-105";
            const styleHandlers = {
              onMouseEnter: (e) => {
                e.currentTarget.style.borderColor = social.color;
                e.currentTarget.style.color = social.color;
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.color = "";
              },
            };

            if (social.name === "E-mail") {
              return (
                <button
                  key={social.name}
                  onClick={() => handleCopyEmail(social.user)}
                  className={commonClasses}
                  {...styleHandlers}
                >
                  <Icon size={24} style={{ color: "inherit" }} />
                  <span className="font-bold text-sm">
                    {emailCopied ? "Email copiado!" : social.name}
                  </span>
                  <span className="text-sm text-gray-400">{social.user}</span>
                </button>
              );
            }
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
                {...styleHandlers}
              >
                <Icon size={24} style={{ color: "inherit" }} />
                <span className="font-bold text-sm">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;