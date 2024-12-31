const BadgeTextGradient = () => {
  return (
    <span className='inline-flex cursor-pointer items-center justify-center rounded-full border border-neutral-800 bg-black px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-3xl'>
      <span className='bg-gradient-to-t from-[#fff] to-blue-500 bg-clip-text text-transparent'>
        Badge Text
      </span>
    </span>
  );
};

export default BadgeTextGradient;
