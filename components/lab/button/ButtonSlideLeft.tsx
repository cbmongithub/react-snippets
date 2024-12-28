import { ArrowRightIcon } from "@radix-ui/react-icons";

const ButtonSlideLeft = () => {
    return (
        <button className="relative inline-flex cursor-pointer items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-500 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center size-full text-zinc-100 duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <ArrowRightIcon className="size-6 text-black" />
            </span>
            <span className="absolute flex items-center justify-center size-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
            <span className="relative invisible">Click Me</span>
        </button>
    );
}

export default ButtonSlideLeft;