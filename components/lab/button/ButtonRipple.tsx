const ButtonRipple = () => {
    return (
        <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-600 text-neutral-100 overflow-clip">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-md group-hover:w-32 group-hover:h-32 opacity-10" />
            <span className="relative">Read more</span>
        </button>
    );
}

export default ButtonRipple;