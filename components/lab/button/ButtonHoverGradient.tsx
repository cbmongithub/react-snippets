const ButtonAnimatedGradient = () => {
  return (
    <>
      <button className='cursor-pointer transition-background inline-flex h-12 items-center justify-center rounded-md border border-neutral-800 bg-gradient-to-r from-neutral-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-neutral-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'>
        Click Me
      </button>
    </>
  );
};

export default ButtonAnimatedGradient;
