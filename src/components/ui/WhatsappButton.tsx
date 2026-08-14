import { MoveUpRight } from "lucide-react";

const WhatsappButton = () => {
    const handleClick = () => {
        const phoneNumber = '13991784021'; // Replace with your number
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
        <div className="flex items-center text-sm border border-gray-200/20 rounded-2xl py-2 px-4 text-gray-500 w-56 hover:text-green-500 *:cursor-pointer">
            <MoveUpRight className="h-4 w-4" />
            <button type="button" className="flex relative items-center justify-center w-full" onClick={handleClick}>
                Falar no WhatsApp
            </button>
        </div>
    );
};

export default WhatsappButton;