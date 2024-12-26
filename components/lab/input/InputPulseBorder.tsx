const InputPulseBorder = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <input
        className='block h-12 w-full rounded-md border border-neutral-800 bg-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 focus:ring-offset-neutral-50'
        placeholder='Enter Text Here'
      />
    </div>
  );
};

export default InputPulseBorder;
