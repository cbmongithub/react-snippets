'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const isRoot = pathname === '/';

  return (
    <>
      {isRoot ? (
        <div className='absolute left-0 right-0 top-0 -z-10 h-52 bg-gradient-to-b from-bg-neutral-400/10 from-10% to-black' />
      ) : null}

      <header className='container mx-auto flex max-w-5xl items-center justify-between px-4 py-8'>
        <Link href='/'>
          <div className='text-xl text-neutral-50'>ui-snippets<span className="absolute text-sm text-rose-500">twv4</span></div>
        </Link>
        <nav className='flex gap-6'>
          <Link
            href='https://github.com/cbmongithub/ui-snippets'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'
          >
            <GitHubLogoIcon className='size-6 text-neutral-50 transition-colors hover:text-neutral-400' />
          </Link>
        </nav>
      </header>
    </>
  );
};
