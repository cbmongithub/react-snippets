const InputGradientBorder = () => {
  return (
    <input
      className='block h-12 w-full rounded-md border border-double border-neutral-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#333,#333)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#2b7fff,#eee)] focus:outline-none'
      placeholder='Enter your email'
    />
  );
};

export default InputGradientBorder;
