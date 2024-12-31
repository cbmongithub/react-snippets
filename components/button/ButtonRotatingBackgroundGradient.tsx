const ButtonRotatingBackgroundGradient = () => {
  return (
    <button className='relative inline-flex cursor-pointer h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#2b7fff_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-neutral-50 backdrop-blur-3xl'>
        Click Me
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;
