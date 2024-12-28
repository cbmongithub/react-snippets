const ButtonShadowGradient = () => {
  return (
    <button className='relative inline-flex cursor-pointer h-12 w-full items-center justify-center rounded-md bg-white px-6 font-medium text-neutral-950 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'>
      <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-white to-[#8678f9] opacity-75 blur-md' />
      Click Me
    </button>
  );
};

export default ButtonShadowGradient;
