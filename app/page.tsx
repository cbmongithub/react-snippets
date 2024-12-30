import ComponentFilter from '@/components/app/ComponentFilter';
import { FlipWords } from '@/components/app/FlipWords';
const Home = () => {
  return (
    <>
      <section>
        <div className='py-16 px-6'>
          <h1 className='mb-8 font-semibold text-neutral-100 text-4xl md:text-5xl'>
            React<FlipWords words={['Snippets', 'Badges', 'Buttons', 'Cards', 'Texts', 'Inputs']} />
            </h1>
          <p className='text-neutral-300'>
            Copy and paste into your apps
          </p>
        </div>
      </section>
      <section className='border border-x-0 border-t-neutral-900 border-b-0'>
        <ComponentFilter />
      </section>
    </>
  );
};

export default Home;