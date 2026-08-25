import { MoveUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhatsappButton = () => {
    const handleClick = () => {
        const phoneNumber = '13991784021'; // Replace with your number
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const { t } = useTranslation();

    return (
        <div className="flex items-center text-sm backdrop-blur-[10px] bg-zinc-900/20 border border-white/10 rounded-2xl py-2 px-4 text-gray-500 w-56 hover:text-green-500 *:cursor-pointer">
            <MoveUpRight className="h-4 w-4" />
            <button type="button" className="flex relative items-center justify-center w-full" onClick={handleClick}>
                {t("infos.button-zap")}
            </button>
        </div>
    );
};

export default WhatsappButton;