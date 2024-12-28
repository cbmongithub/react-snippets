import ComponentFilter from '@/components/app/ComponentFilter';

const Home = () => {
  return (
    <>
      <section>
        <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div>
            <h1 className='mb-8 text-neutral-100 text-4xl md:text-5xl'>
              Dark mode components
            </h1>
            <p className='text-xl text-neutral-400'>Crafted with
              <span className='text-neutral-100'>&nbsp;Tailwind and React</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <ComponentFilter />
      </section>
    </>
  );
};

export default Home;