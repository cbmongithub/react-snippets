const BadgeAnimatedGradientBorder = () => {
  return (
    <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EEEEEE_0%,#2b7fff_50%,#EEEEEE_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-medium text-neutral-50 backdrop-blur-3xl'>
        Badge Text
      </div>
    </span>
  );
};

export default BadgeAnimatedGradientBorder;
