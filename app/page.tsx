import { ArrowRightIcon } from '@radix-ui/react-icons';
import { COMPONENTS } from '@/data/components';
import Link from 'next/link';

type CardComponentProps = {
  children: React.ReactNode;
  slug: string;
  name: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  children,
  slug,
  name,
}) => {
  return (
    <div className='relative flex items-center justify-center rounded-xl border border-neutral-900 bg-black px-8 py-32'>
      <Link
        href={`/${slug}`}
        className='absolute left-5 top-4 text-sm text-white'
      >
        {name}
      </Link>
      <div className='absolute right-5 top-3'>
        <Link href={`/${slug}`}>
          <ArrowRightIcon className='h-5 w-5 text-white' />
        </Link>
      </div>
      <div className='z-0'>{children}</div>
    </div>
  );
};

export default function Home() {
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
      <div className='w-full py-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {COMPONENTS.map((item, index) => (
            <CardComponent key={index} slug={item.slug} name={item.name}>
              <item.component />
            </CardComponent>
          ))}
        </div>
      </div>
    </>
  );
}
