
const OnlineButton = () => {
    return (
        <div className="flex items-center text-sm backdrop-blur-[10px] bg-zinc-900/20 border border-white/10 rounded-full py-2 px-4 text-gray-500 md:w-55">
            <span className="relative flex items-center justify-center w-full gap-2 text-sm font-medium text-gray-500">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-ping opacity-75 duration-300" /> Disponível para trabalho
            </span>
        </div>
    );
};

export default OnlineButton;